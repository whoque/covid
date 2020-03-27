import React from "react";
import Country from "./Country";

class CountryView extends React.Component {
  state = {
    country: null
  };
  static stats = {};
  setCountry = country => {
    const name = country.split("_")[0];
    this.setState({ country: name });
  };
  getCountryData(country) {
    const statistics = this.props.stats.countryData[country];
    this.stats = {
      cases: statistics.cases,
      deaths: statistics.deaths,
      recovered: statistics.total_recovered
    };
  }
  paintHelper = () => {
    if (this.state.country) {
      this.getCountryData(this.state.country);
    } else {
      this.getCountryData(this.props.stats.country);
    }
    return (
      <div className="wrapper">
        <div className="title">
          <Country
            onSelect={this.setCountry}
            bible={this.props.stats.countryData}
            country={this.props.stats.country + "_" + this.props.stats.flag}
          />
        </div>

        <div className="stats">
          <div className="block block1">
            <div className="stat-title">Cases</div>
            <div className="stat-value">{this.stats.cases}</div>
          </div>
          <div className="block block2">
            <div className="stat-title">Deaths</div>
            <div className="stat-value">{this.stats.deaths}</div>
          </div>
          <div className="block block3">
            <div className="stat-title">Recovered</div>
            <div className="stat-value">{this.stats.recovered}</div>
          </div>
        </div>
        {/* <div className="swipe">&larr;</div> */}
      </div>
    );
  };

  render() {
    return <div>{this.paintHelper()}</div>;
  }
}

export default CountryView;
