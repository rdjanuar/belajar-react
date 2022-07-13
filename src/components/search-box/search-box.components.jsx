export const SearchBox = ({ search, placeholder }) => {
  return (
    <input
      type="search"
      className="my-10 rounded-lg p-4"
      placeholder={placeholder}
      onChange={search}
    />
  );
};
