import axios from "axios";

import React, { useState, useEffect } from "react";

import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

import "./App.css";

export const App = () => {
  const [heroName, setHeroName] = useState([]);
  const [searchHero, setSearchHero] = useState("");

  useEffect(() => {
    const getData = async () => {
      const heroData = await axios.get(
        "https://api.dazelpro.com/mobile-legends/hero"
      );
      setHeroName(heroData.data.hero);
    };
    getData();
  }, []);

  const searchRobot = (event) => {
    return setSearchHero(String(event.target.value).toLocaleLowerCase());
  };

  const filterHero = heroName.filter(({ hero_name }) => {
    return hero_name.toLocaleLowerCase().includes(searchHero);
  });

  return (
    <div className="App">
      <div className="App-title mt-10 text-3xl text-white font-bold uppercase">
        Hero Mobile Legends
      </div>
      <SearchBox
        className="monsters-search-box"
        search={searchRobot}
        placeholder="Search Hero"
      />
      <Cardlist mobileHero={filterHero} />
    </div>
  );
};
