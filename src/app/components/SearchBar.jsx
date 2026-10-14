import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className="flex gap-4 p-4 w-full">
      {/* Coral cirkel bag søgeikonet */}
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-coral">
        <LuSearch
  size={30}
  className="text-white scale-x-[-1]"
/>
      </div>

      <input
        type="text"
        placeholder="Search Breeds"
        className="w-full rounded-full border-2 border-gray-500 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};

export default SearchBar;