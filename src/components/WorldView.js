import React from "react";

class WorldView extends React.Component {
  paintHelper = () => {
    return (
      <div className="wrapper">
        <div className="title">World view</div>
        <div className="stats">
          <div className="block block1">
            <div className="stat-title">Cases</div>
            <div className="stat-value">{this.props.stats.cases}</div>
          </div>
          <div className="block block2">
            <div className="stat-title">Deaths</div>
            <div className="stat-value">{this.props.stats.deaths}</div>
          </div>
          <div className="block block3">
            <div className="stat-title">Recovered</div>
            <div className="stat-value">{this.props.stats.recovered}</div>
          </div>
        </div>
        {/* <div className="swipe">&rarr;</div> */}
      </div>
    );
  };

  render() {
    return <div className="world-view">{this.paintHelper()}</div>;
  }
}

export default WorldView;
