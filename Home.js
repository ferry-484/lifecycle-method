import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      topic: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let body = {};
    body["name"] = body.username;
    console.log("message");
    console.log(
      this.props.history.push({
        pathname: "/about",
        state: {
          data: { name: "ferry", lastname: "salhan" },
        },
      })
    );

    let headers = {};
    headers["Content-type"] = "application/json; charset=UTF-8";

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        //redirect
        //display on screen
        // save to state

        console.log(response);
        console.log(this.props.history);
        if (event == "submit") {
          //   props.history.push({
          //     pathname: "/about",
          //     data: object,
          //   });
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
    console.log(
      `${this.state.username} ${this.state.email} ${this.state.password} ${this.state.topic}`
    );
  };

  render() {
    return (
      <div>
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <br />

            <br />
            <button type="submit">
              <Link to="/about">Submit</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
