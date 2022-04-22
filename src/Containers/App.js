import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBar from "../Components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: "",
    };
  }

  //Fetch data for MLB players
  getData = async function () {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      this.setState({ users: data });
    } catch (error) {
      alert("Strike 3! " + error);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 3000);
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
