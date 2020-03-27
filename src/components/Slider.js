import React from "react";
import "../styles/slider_lib.css";
import "../styles/slider.scss";
import CountryView from "./CountryView";
import WorldView from "./WorldView";
import "../styles/world-view.scss";
import "../styles/country-view.scss";
import ipData from "../apis/ipData";
import countrywiseData from "../apis/countryData";
import worldwiseData from "../apis/worldData";
import _ from "lodash";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.fillStats = this.fillStats.bind(this);
  }
  state = {
    country: "--",
    cases: "--",
    deaths: "--",
    recovered: "--",
    flag: "--",
    countryData: {}
  };
  componentDidMount() {
    this.initCalls();
  }

  componentDidUpdate() {
    if (this.state.countryData) {
    }
  }

  async initCalls() {
    const [countryData, covidData, worldData] = await Promise.all([
      ipData.get(),
      countrywiseData.get(`?country=${this.state.country}`),
      worldwiseData.get()
    ]);
    this.fillStats(
      worldData.data,
      {
        ..._.mapKeys(covidData.data.countries_stat, "country_name")
      },
      countryData.data,
      this
    );
  }

  fillStats = (data, bible, { country_name, country_code }, ref) => {
    this.setState(
      {
        country: country_name,
        cases: data.total_cases,
        deaths: data.total_deaths,
        recovered: data.total_recovered,
        countryData: bible,
        flag: country_code.toLowerCase()
      },
      () => {
        window.fullpage.initialize("#fullpage", {
          anchors: ["firstPage", "secondPage"],
          menu: "#menu",
          css3: true,
          afterLoad: function() {
            const elem = document.querySelector(".drop-down");
            if (elem) {
              elem.addEventListener("change", function(e) {
                ref.forceUpdate();
                const src = e.srcElement.value.split("_");
                ref.setState({ country: src[0], flag: src[1] });
              });
            }
          }
        });
      }
    );
  };

  paintScrollers = () => {
    return (
      <div id="fullpage">
        <div className="section" id="section1">
          <div className="slide" id="slide1">
            <div className="content">
              <WorldView stats={this.state} />
            </div>
          </div>
          <div className="slide" id="slide2">
            <div className="content">
              {this.state.country !== "--" ? (
                <CountryView stats={this.state} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.paintScrollers()}</div>;
  }
}

export default Slider;
