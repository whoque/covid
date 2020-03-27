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
    this.setState({
      country: country_name,
      cases: data.total_cases,
      deaths: data.total_deaths,
      recovered: data.total_recovered,
      countryData: bible,
      flag: country_code.toLowerCase()
    });
  };

  handleDarkMode = e => {
    let element = document.getElementById("section1");
    element.classList.toggle("dark-mode-background");
    element.classList.toggle("white-mode-background");
  };

  paintScrollers = () => {
    return (
      <div id="fullpage">
        <div className="section white-mode-background" id="section1">
          <div className="slide active" id="slide1">
            <div
              className={`content ${
                this.props.isPortrait ? `portrait` : `not-portrait`
              }`}
            >
              <WorldView stats={this.state} />
            </div>
          </div>
          <div className="slide inactive" id="slide2">
            <div
              className={`content ${
                this.props.isPortrait ? `portrait` : `not-portrait`
              }`}
            >
              {this.state.country !== "--" ? (
                <CountryView stats={this.state} />
              ) : null}
            </div>
          </div>
          <div className="dark-mode default-color-off">
            <label className="label">
              <div className="toggle">
                <input
                  className="toggle-state"
                  type="checkbox"
                  name="check"
                  value="check"
                  onChange={this.handleDarkMode}
                />
                <div className="indicator"></div>
              </div>
              <div className="label-text"></div>
            </label>
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
