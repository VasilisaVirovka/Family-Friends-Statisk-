import Logo from "./Logo";
import Notifikations from "./Notifikations";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Notifikations />
    </header>
  );
};

export default Header;
