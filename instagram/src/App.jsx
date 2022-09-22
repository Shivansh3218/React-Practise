import "./App.css";
import React, { Component } from "react";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isUserLogin: Boolean,
      wrongCredentials: true,
      clickedOnHandleClick: false,
      displayLoginPage: true,
    };
  }
  handleClick = (e) => {
    this.setState({ displayLoginPage: false });
    this.setState({ clickedOnHandleClick: true });
    e.preventDefault();
    console.log(this.state);
    if (!this.state.userName || !this.state.password) {
      alert("Please enter all the fields");
      this.setState({ wrongCredentials: false });
      this.setState({ isUserLogin: false });
    } else {
      if (this.state.password.length < 8) {
        alert("password should be more than 8 letters");
        this.setState({ isUserLogin: false });
      } else {
        this.setState({ isUserLogin: true });
      }
    }
  };
  render() {
    return (
      <div>
        {this.state.displayLoginPage ? (
          <>
            <div>
              <h1>UserName:</h1>
              <input
                onChange={(e) => {
                  this.setState({ userName: e.target.value });
                }}
                className="user_input"
                type="text"
              />
            </div>
            <div>
              <h1>Password:</h1>
              <input
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                className={
                  this.state.wrongCredentials ? "correctClass" : "wrongClass"
                }
                type="text"
              />
            </div>
            <button onClick={this.handleClick}>Login</button>
          </>
        ) : this.state.isUserLogin ? (
          "loginSuccessful"
        ) : (
          "loginUnSuccessful"
        )}
      </div>
    );
  }
}

export default App;
