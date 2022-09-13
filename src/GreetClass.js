import React, { Component } from "react";

export class GreetClass extends Component {
  render() {
    return <div>Good Morning {this.props.name}</div>;
  }
}

export default GreetClass;
