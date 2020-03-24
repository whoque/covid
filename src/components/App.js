import React from "react";
import covid from "../apis/covid";
import ipData from "../apis/ipData";
import _ from "lodash";
import "./App.css";
import Country from "./Country";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  state = {
    country: "--",
    flagIcon: "--",
    lastUpdate: "--",
    confirmed: "--",
    deaths: "--",
    recovered: "--",
    newDeath: "--",
    newCase: "--",
    activeCase: "--",
    countrySelectorOpen: false
  };

  static bible = {};
  static updateDate = null;
  static initialCountry = null;

  async componentDidMount() {
    const [countryData, covidData] = await Promise.all([
      ipData.get(),
      covid.get(`?country=${this.state.country}`)
    ]);
    this.setState({ flagIcon: countryData.data.country_code.toLowerCase() });
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
      recovered: this.bible[country].total_recovered,
      newDeath: this.bible[country].new_deaths,
      newCase: this.bible[country].new_cases,
      activeCase: this.bible[country].active_cases
    });
  };

  setCountry = country => {
    console.log(country);
    if (country && this.bible[country.value]) {
      this.refreshState(country.value);
      country.options.find(value => {
        if (value.value === country.value) {
          this.setState({ flagIcon: value.flag });
        }
        return false;
      });
    }
    this.setState({ countrySelectorOpen: false });
  };

  setCountrySelector = () => {
    this.setState({ countrySelectorOpen: true });
    console.log("hhhh");
    console.log(this.dropdownRef.current);
  };

  unsetCountrySelector = e => {
    this.setState({ countrySelectorOpen: false });
  };

  renderStats() {
    return (
      <div className="wrapper">
        <div className="title">
          <h2 className="ui header">
            <i className="medkit icon large white"></i>
            <div className="content titleContent">COVID-19 STATISTICS</div>
            <div className="dropDownWrap">
              <div className="ui icon labeled vertical buttons">
                <button className="ui button" onClick={this.setCountrySelector}>
                  <i
                    aria-hidden="true"
                    className={this.state.flagIcon + " flag"}
                  ></i>
                  {this.state.country}
                </button>
              </div>
            </div>
          </h2>
        </div>
        <div className="content">
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
          <div className="additionalInfo">
            <div className="block">
              <div className="key">New cases</div>
              <div className="value">{this.state.newCase}</div>
            </div>
            <div className="block">
              <div className="key">New deaths</div>
              <div className="value">{this.state.newDeath}</div>
            </div>
            <div className="block">
              <div className="key">Active cases</div>
              <div className="value">{this.state.activeCase}</div>
            </div>
          </div>
        </div>
        <div className="lastUpdated">{`Last updated at ${this.state.lastUpdate}`}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={this.state.countrySelectorOpen ? "blurElem" : ""}>
          {this.renderStats()}
        </div>
        <div
          className={
            this.state.countrySelectorOpen
              ? "countrySlectorInview countrySlector"
              : "countrySlector"
          }
          onBlur={this.unsetCountrySelector}
        >
          <Country
            onSelect={this.setCountry}
            bible={this.bible}
            initialCountry={this.initialCountry}
            ref={this.dropdownRef}
          />
        </div>
      </div>
    );
  }
}

export default App;
