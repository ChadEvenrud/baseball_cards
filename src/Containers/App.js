import React, { Component } from "react";
import Card from "../Components/Card";

class App extends Component {
  constructor() {
    super();
    this.obj = {
      users: [],
      test: "Chad Test",
    };
  }

  //Fetch data for MLB players
  getData = async function () {
    const data = await fetch("url");
    return data.json();
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Card playersName="Chad Evenrud" />
      </div>
    );
  }
}

export default App;
