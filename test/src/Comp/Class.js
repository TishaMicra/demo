import React, { Component } from "react";


export default class Class extends Component {
  // alertName = () => {
  //   alert("alert");
  // };
  // alertName = () => {
  //   alert(this.state.username);
  // };
  alertName = (e) => {
    e.preventDefault();
    console.log("name : " + this.state.username);
    console.log("city : " + this.state.city);
  };
  state = {
    username: "",
    city: "",
  };
  handlenameinput = (e) => {
    this.setState({ username: e.target.value });
  };
  handlecityinput = (e) => {
    this.setState({ city: e.target.value });
  };
  render() {
    return (
      <>
        <div>Class</div>
        {/* <button onClick={this.alertName}>Class Componenet</button> <br></br> */}
        <form>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlenameinput}
            name="username"
            placeholder="username"
          />

          <input
            type="text"
            value={this.state.city}
            onChange={this.handlecityinput}
            name="city"
            placeholder="city"
          />
          <button onClick={this.alertName}>click</button>
        </form>
      </>
    );
  }
}
