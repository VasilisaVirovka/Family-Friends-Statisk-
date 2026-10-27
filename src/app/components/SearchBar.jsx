
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex w-full gap-4 p-4">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-coral">
        <LuSearch size={30} className="scale-x-[-1] text-white" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search Breeds"
        aria-label="Search dog breeds"
        className="w-full rounded-full border-2 border-gray-500 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};

export default SearchBar;
