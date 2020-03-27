import React from "react";
import Slider from "./Slider";
import "../styles/App.scss";

class App extends React.Component {
  state = {
    portrait: null
  };
  componentDidMount() {
    if (window.innerWidth && window.innerHeight) {
      this.setState({ portrait: window.innerWidth < window.innerHeight });
    }
    this.handleChange(this);
  }

  handleChange = self => {
    if ("onorientationchange" in window) {
      window.addEventListener(
        "orientationchange",
        function(e) {
          self.setState({
            portrait: e.target.innerWidth > e.target.innerHeight
          });
          const elem = document.querySelector(".slide.active");
          const full = document.querySelector("#fullpage");
          if (elem.id === "slide2") {
            setTimeout(function() {
              full.scrollTo(3000, 0);
            }, 100);
          }
        },
        false
      );
    }
  };
  render() {
    return (
      <div>
        <Slider isPortrait={this.state.portrait} />
      </div>
    );
  }
}

export default App;
