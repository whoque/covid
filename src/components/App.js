import React from "react";
import covid from "../apis/covid";
import ipData from "../apis/ipData";
import _ from "lodash";
import "./App.css";
import Country from "./Country";

class App extends React.Component {
  state = {
    country: "",
    lastUpdate: "",
    confirmed: "--",
    deaths: "--",
    recovered: "--"
  };

  static bible = {};
  static updateDate = null;
  static initialCountry = null;

  async componentDidMount() {
    const [countryData, covidData] = await Promise.all([
      ipData.get(),
      covid.get(`?country=${this.state.country}`)
    ]);

    this.bible = {
      ..._.mapKeys(covidData.data.countries_stat, "country_name")
    };
    this.updateDate = new Date(
      covidData.data.statistic_taken_at.split(" ").join("T")
    );
    this.initialCountry = countryData.data.country_name;
    this.refreshState(this.initialCountry);
  }

  refreshState = country => {
    this.setState({
      country: country,
      lastUpdate: this.updateDate,
      confirmed: this.bible[country].cases,
      deaths: this.bible[country].deaths,
      recovered: this.bible[country].total_recovered
    });
  };

  setCountry = country => {
    console.log("Country Name: ", country);
    if (this.bible[country]) {
      this.refreshState(country);
    }
  };

  renderStats() {
    return (
      <div className="wrapper">
        <div className="title">
          <h2 className="ui header">
            <i className="medkit icon large white"></i>
            <div className="content titleContent">COVID-19 STATISTICS</div>
          </h2>
        </div>
        <div className="content">
          <div className="dropDownWrap">
            <Country
              onSelect={this.setCountry}
              bible={this.bible}
              initialCountry={this.initialCountry}
            />
          </div>
          <div className="block">
            <div className="key">Confirmed cases</div>
            <div className="value">{this.state.confirmed}</div>
          </div>
          <div className="block">
            <div className="key">Deaths</div>
            <div className="value">{this.state.deaths}</div>
          </div>
          <div className="block">
            <div className="key">Recovered</div>
            <div className="value">{this.state.recovered}</div>
          </div>
        </div>
        <div className="lastUpdated">{`Last updated at ${this.state.lastUpdate}`}</div>
      </div>
    );
  }

  render() {
    return <div>{this.renderStats()}</div>;
  }
}

export default App;
