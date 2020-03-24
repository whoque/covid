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
    covid.get(`/stats?country=${this.state.country}`).then(response => {
      const {
        country,
        lastUpdate,
        confirmed,
        deaths,
        recovered
      } = response.data.data.covid19Stats[0];
      const date = new Date(lastUpdate);
      this.setState({
        country,
        lastUpdate: date,
        confirmed,
        deaths,
        recovered
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
