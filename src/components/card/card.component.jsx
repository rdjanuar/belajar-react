export const Card = ({ monster }) => {
  const { hero_id, hero_name, hero_role } = monster;
  return (
    <div
      className="flex flex-col items-center bg-anjay m-5 rounded-lg w-56 h-72 cursor-pointer hover:scale-105 ease-in-out duration-300 "
      key={hero_id}
    >
      <img
        alt={`monster ${hero_name}`}
        src={`https://robohash.org/${hero_id}?size=180x180`}
      />
      <div className="mt-5">
        <h2>{hero_name}</h2>
        <p>{hero_role}</p>
      </div>
    </div>
  );
};
