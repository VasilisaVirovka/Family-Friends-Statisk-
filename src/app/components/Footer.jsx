import { LuHouse } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import IconStar from "./IconStar";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-10 h-24">
      <LuHouse size={24} className="text-coral" />

      <IconStar />

      <TbMessageCircle size={24} className="text-gray-400" />

      <FiUser size={24} className="text-gray-400" />
    </div>
  );
};

export default Footer;