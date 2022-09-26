import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // 1st way to do conditinoal rendering
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome Abhay</h1>;
    // } else {
    //   return <h1>Welcome Guest</h1>;
    // }
    //2nd way to do conditional rendering
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Welcome Abhay</h1>;
    // } else {
    //   message = <h1>Welcome Guest</h1>;
    // }
    // return <>{message}</>;
    //3rd way using turnary operator
    // return this.state.isLoggedIn ? (
    //   <h1>Welcome Abhay</h1>
    // ) : (
    //   <h1>Welcome Guest</h1>
    // );

    // 4th Way
    return this.state.isLoggedIn && <h1>Welcome Abhay</h1>;
  }
}

export default ConditionalRendering;
