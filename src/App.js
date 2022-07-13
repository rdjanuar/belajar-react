import axios from "axios";

import React, { useState, useEffect } from "react";

import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

import "./App.css";

export const App = () => {
  const [heroName, setHeroName] = useState([]);
  const [searchRobots, setSearchRobots] = useState("");

  useEffect(() => {
    const getData = async () => {
      const robotsData = await axios.get(
        "https://api.dazelpro.com/mobile-legends/hero"
      );
      setHeroName(robotsData.data.hero);
    };
    getData();
  }, []);

  const searchRobot = (event) => {
    return setSearchRobots(String(event.target.value).toLocaleLowerCase());
  };

  const filterRobots = heroName.filter(({ hero_name }) => {
    return hero_name.toLocaleLowerCase().includes(searchRobots);
  });

  return (
    <div className="App">
      <div className="App-title">Hero Mobile Legends</div>
      <SearchBox
        className="monsters-search-box"
        search={searchRobot}
        placeholder="Search Hero..."
      />
      <Cardlist monsters={filterRobots} />
    </div>
  );
};
