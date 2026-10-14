import { LuBell } from "react-icons/lu";

const Notifikations = () => {
  return (
    <LuBell
      size={24}
      className="mr-4 transition-opacity duration-200 hover:opacity-60 cursor-pointer"
      aria-label="Notifikationer"
    />
  );
};

export default Notifikations;