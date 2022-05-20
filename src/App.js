import React, { Component } from "react";
//import SecondComponent from "./SecondComponent";
//import ThirdComponent from "./ThirdComponent";
import FourComponent from "./FourComponent";
import First from "./functional/First";
import "./App.css";

//Mount / Update / Unmount
class App extends Component {
  // constructor() {
  //   super();
  //   console.log("called constructor");
  // }

  state = {
    company: "Ionic",
    data: [],
  };

  // static getDerivedStateFromProps() {
  //   console.log("called getDerivedStateFromProps");
  // }

  componentDidMount() {
    //console.log("called componentDidMount");
    setTimeout(() => {
      this.setState({
        data: [
          {
            name: "Rohit",
          },
          {
            name: "Kapil",
          },
        ],
      });
    }, 1000);
  }

  componentDidUpdate() {
    //console.log("called componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("called componentWillUnmount");
  }

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
      data: [
        {
          name: "Rohit",
        },
        {
          name: "Kapil",
        },
        {
          name: "Dheeraj",
        },
        {
          name: "Abhishek",
        },
      ],
    });
  };

  render() {
    //console.log("called render", this.state.data);

    return (
      <div className="App">
        <h1>React Learning</h1>
        <p>by {this.state.company} </p>
        <button onClick={this.someEventHandler}>change company name</button>

        {this.state.data.length === 0 ? (
          <p>loading...</p>
        ) : (
          this.state.data.map((student, index) => {
            return <h3 key={index}>{student.name}</h3>;
          })
        )}

        {/*Child Components */}

        {/* <SecondComponent companyName={this.state.company} /> */}
        {/* <ThirdComponent /> */}
        {/** someValue={1}  */}
        <FourComponent />
        <h4>Functional Components</h4>
        <First />
      </div>
    );
  }
}

export default App;
