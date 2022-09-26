import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, message: "Hello Message" };

    this.incrementCount = this.incrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCountFive() {
    this.incrementCount();
    this.incrementCount();

    this.incrementCount();

    this.incrementCount();

    this.incrementCount();
  }
  incrementCount() {
    //     this.setState({ count: this.state.count + 1 }, () =>
    //       console.log(this.state.count)
    //     );
    // this.setState(prevState =>({
    //     count: prevState.count+1;
    // }))̥
  }

  handleClick() {
    this.setState({
      message: "Hello React",
    });
    console.log(this.state.message);
  }

  render() {
    return (
      <>
        <h1>Count -- {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.incrementCountFive}>Increment 5</button>
        <button onClick={() => this.handleClick()}>Arrow Function</button>
      </>
    );
  }
}

export default Counter;
