import React, { Component } from "react";
import "./App.css";

class SecondComponent extends Component {
  render() {
    return (
      <div className="App">
        <h2>SecondComponent</h2>
        {this.props.companyName}
      </div>
    );
  }
}

export default SecondComponent;
