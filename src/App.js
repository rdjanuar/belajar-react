import { Component } from "react";
import axios from "axios";

import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

import "./App.css";

// export const App = () => {
//   return (
//     <div className="App">
//       <div className="App-title">Monster Roledex</div>
//       {/* <SearchBox
//         className="monsters-search-box"
//         search={onSearchChange}
//         placeholder="Search Monster..."
//       />
//       <Cardlist monsters={filterMonster} /> */}
//     </div>
//   );
// };

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    return new Promise(async (resolve, reject) => {
      try {
        const url = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        resolve(
          this.setState(() => {
            return {
              monsters: url.data,
            };
          })
        );
      } catch (error) {
        reject(error.message);
      }
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonster = monsters.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <div className="App-title">Monster Roledex</div>
        <SearchBox
          className="monsters-search-box"
          search={onSearchChange}
          placeholder="Search Monster..."
        />
        <Cardlist monsters={filterMonster} />
      </div>
    );
  }
}
