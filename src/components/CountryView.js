import React from "react";
import Country from "./Country";

class CountryView extends React.Component {
  paintHelper = () => {
    const statistics = this.props.stats.countryData[this.props.stats.country];
    const stats = {
      cases: statistics.cases,
      deaths: statistics.deaths,
      recovered: statistics.total_recovered
    };
    console.log(stats);
    return (
      <div className="wrapper">
        <div className="title">Country view</div>
        <Country
          onSelect={this.setCountry}
          bible={this.props.stats.countryData}
          country={this.props.stats.country + "_" + this.props.stats.flag}
        />
        <div className="stats">
          <div className="block block1">
            <div className="stat-title">Cases</div>
            <div className="stat-value">{stats.cases}</div>
          </div>
          <div className="block block2">
            <div className="stat-title">Deaths</div>
            <div className="stat-value">{stats.deaths}</div>
          </div>
          <div className="block block3">
            <div className="stat-title">Recovered</div>
            <div className="stat-value">{stats.recovered}</div>
          </div>
        </div>
        <div className="swipe">&larr;</div>
      </div>
    );
  };

  render() {
    return <div>{this.paintHelper()}</div>;
  }
}

export default CountryView;
