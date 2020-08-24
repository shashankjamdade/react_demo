import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./component/card_list/CardListComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchKey: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchKey } = this.state;
    var filteredList = monsters.filter((monst) =>
      monst.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            this.setState(
              {
                searchKey: e.target.value,
              },
              () => {
                console.log(this.state.searchKey);
              }
            );
          }}
        ></input>
        <CardList monsters={filteredList}></CardList>
      </div>
    );
  }
}

export default App;
