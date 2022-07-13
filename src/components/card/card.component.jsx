import { Component } from "react";
import "./card.styles.css";

export class Card extends Component {
  render() {
    const { hero_id, hero_name, hero_role } = this.props.monster;
    return (
      <div className="card-container" key={hero_id}>
        <img
          alt={`monster ${hero_name}`}
          src={`https://robohash.org/${hero_id}?size=180x180`}
        />
        <h2>{hero_name}</h2>
        <p>{hero_role}</p>
      </div>
    );
  }
}
