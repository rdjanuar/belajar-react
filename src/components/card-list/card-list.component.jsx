import { Card } from "../card/card.component";

export const Cardlist = ({ mobileHero }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {mobileHero.map((hero) => {
        return <Card key={hero.hero_id} monster={hero} />;
      })}
    </div>
  );
};
