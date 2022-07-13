import { Component } from "react";
import { Card } from "../card/card.component";

export class Cardlist extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="flex flex-wrap justify-center items-center">
        {monsters.map((monster) => {
          return <Card key={monster.hero_id} monster={monster} />;
        })}
      </div>
    );
  }
}
