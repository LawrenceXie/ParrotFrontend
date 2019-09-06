import React, { Component } from "react";
import { LandingPageContainer } from "./components/index";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-147237550-1");
  ReactGA.pageview("/homepage");
}

class App extends Component {
  render() {
    initializeReactGA();
    return <LandingPageContainer />;
  }
}

export default App;
