import React from "react";
import Slider from "./Slider";
import "../styles/App.scss";

class App extends React.Component {
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
          const elem = document.querySelector(".slide.active");
          const full = document.querySelector("#fullpage");
          if (elem.id === "slide2") {
            setTimeout(function() {
              full.scrollTo(3000, 0);
            }, 600);
          }
        },
        false
      );
    }
  };
  render() {
    return (
      <div>
        <Slider />
      </div>
    );
  }
}

export default App;
