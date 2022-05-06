import React, { Component } from "react";
import SecondComponent from "./SecondComponent";
import "./App.css";

//Mount / Update / Unmount
class App extends Component {
  state = {
    company: "Ionic",
  };

  //Parent Component
  // constructor() {
  //   super();
  //   //State
  //   // this.state = {
  //   //   company: "Ionic",
  //   // };

  //   //this.someEventHandler = this.someEventHandler.bind(this);
  // }

  // someEventHandler() {
  //   console.log("called button clicked");
  //   this.setState({
  //     company: "Define Next",
  //   });
  // }

  // Arrow Function (ES6)
  someEventHandler = () => {
    this.setState({
      company: "Define Next",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Learning</h1>
        <p>by {this.state.company} </p>
        <button onClick={this.someEventHandler}>change company name</button>
        <SecondComponent companyName={this.state.company} />
      </div>
    );
  }
}

export default App;
