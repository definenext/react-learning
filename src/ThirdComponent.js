import React, { Component } from "react";

//react-router

class ThirdComponent extends Component {
  state = {
    name: "",
    age: 0,
    country: "",
  };

  _changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  _changeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  _changeCountry = (e) => {
    this.setState({ country: e.target.value });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    //e.stopPropagation();
    console.log("called on submit");
  };

  render() {
    const { name, age, country } = this.state; //destructure

    return (
      <div>
        <h3>In Third Component</h3>
        <form onSubmit={this._onSubmit}>
          <input
            type="text"
            value={name}
            onChange={this._changeName}
            placeholder="Name"
          />
          <input
            type="number"
            value={age}
            onChange={this._changeAge}
            placeholder="Age"
          />
          <input
            type="text"
            value={country}
            onChange={this._changeCountry}
            placeholder="Country"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default ThirdComponent;
