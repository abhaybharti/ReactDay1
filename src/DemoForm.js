import React, { Component } from "react";

class DemoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      language: "React",
      level: "masters",
      isRedux: false,
      isContextApi: false,
    };
  }

  handleUserChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(JSON.stringify);
  };

  handleDegreeChange = (e) => {
    let value = e.target.type === "radio" ? e.target.checked : e.target.value;
    console.log(value);
    if (e.target.value === "bachelors") {
      value = "bachelors";
    } else if (e.target.value === "masters") {
      value = "masters";
    } else {
      value = "bachelors";
    }

    this.setState({
      level: value,
    });
    console.log(this.state.level);
  };

  handleCheckboxChange = (e) => {
    let value = e.target.value;

    if (value.includes("redux")) {
      this.setState({
        isRedux: !this.state.isRedux,
      });
    } else if (value.includes("context")) {
      this.setState({
        isContextApi: !this.state.isContextApi,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="usename">Username </label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="comment">Comments </label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="language">Language </label>
          <select
            id="language"
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="react">React</option>
            <option value="java">Java</option>
            <option value="angular">Angular</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <br />
        <div>
          <div>
            <b>Degree</b>
          </div>
          <label>
            <input
              name="level"
              type="radio"
              value="bachelors"
              checked={this.state.level === "bachelors"}
              onChange={this.handleDegreeChange}
            />
            Bachelors :{" "}
          </label>
          <label>
            <input
              name="level"
              type="radio"
              value="masters"
              checked={this.state.level === "masters"}
              onChange={this.handleDegreeChange}
            />
          </label>
          Masters :{" "}
        </div>

        <br />
        <div>
          <div>
            <b>React Data Sharing Concepts </b>
          </div>
          <label>
            <input
              type="checkbox"
              name="checkboxexample1"
              value="redux"
              checked={this.state.isRedux}
              onChange={this.handleCheckboxChange}
            />
            Redux
          </label>
          <label>
            <input
              type="checkbox"
              name="checkboxexample2"
              checked={this.state.isContextApi}
              value="contextapi"
              onChange={this.handleCheckboxChange}
            />
            Context API
          </label>
        </div>
        <br />
        <pre>{JSON.stringify(this.state, null, 3)}</pre>
        <br />

        <input type="submit" value="send"></input>
      </form>
    );
  }
}

export default DemoForm;
