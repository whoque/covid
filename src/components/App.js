import React from "react";
import covid from "../apis/covid";
import "./App.css";

class App extends React.Component {
  state = {
    country: "India",
    lastUpdate: "",
    confirmed: null,
    deaths: null,
    recovered: null
  };

  componentDidMount() {
    //${this.state.country}
    covid.get("?country=India").then(response => {
      console.log(
        response.data.stat_by_country[response.data.stat_by_country.length - 1]
      );
      const {
        country_name,
        record_date,
        total_cases,
        total_deaths,
        total_recovered
      } = response.data.stat_by_country[
        response.data.stat_by_country.length - 1
      ];
      const date = new Date(record_date);
      this.setState({
        country: country_name,
        lastUpdate: date,
        confirmed: total_cases,
        deaths: total_deaths,
        recovered: total_recovered
      });
    });
  }

  renderStats() {
    return (
      <div className="wrapper">
        <div className="title">
          <h2 className="ui header">
            <i className="medkit icon large white"></i>
            <div className="content titleContent">
              COVID-19 INDIA STATISTICS
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
