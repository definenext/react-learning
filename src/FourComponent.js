import React, { Component } from "react";

const fakeFetch = (n) => {
  //API Calls
  //console.log(`Doing fake fetch: ${n}`);
  return n;
};

class FourComponent extends Component {
  state = {
    value: false,
    number: 0,
  };

  componentDidMount() {
    const number = fakeFetch(this.state.number + 1);
    //number: number => number
    this.setState({ number });
  }

  /**
   *
   * @param {*} prevProps
   * @param {*} prevState
   * Maximum update depth exceeded. This can happen when a component
   * repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
   * React limits the number of nested updates to prevent infinite loops.
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("called", prevState.value, this.state.value);
      const number = fakeFetch(this.state.number + 1);
      this.setState({ number });
    }
  }

  toggle = () => {
    //this.setState({ value: !this.state.value});
    // this.setState(({ value }) => {
    //   return (value = !value);
    // });
    this.setState(({ value }) => ({ value: !value }));
  };

  render() {
    return (
      <div>
        <h1>Number: {this.state.number}</h1>
        <button onClick={this.toggle}>re-render</button>
      </div>
    );
  }
}

export default FourComponent;
