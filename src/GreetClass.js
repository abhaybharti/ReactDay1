import React, { Component } from "react";

export class GreetClass extends Component {
  render() {
    return (
      <div>
        Good Morning {this.props.name} {this.props.children}
      </div>
    );
  }
}

export default GreetClass;
