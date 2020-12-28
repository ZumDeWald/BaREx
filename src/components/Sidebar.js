import { useState } from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ setView }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const handleViewChange = (newView) => {
    handleMenuToggle();
    setView(newView);
  };

  return (
    <aside id="sidebar" className={menuOpen ? "menu-show" : ""}>
      <FontAwesomeIcon
        icon="chevron-left"
        className={menuOpen ? "menu-chev" : "menu-chev rotate180"}
        onClick={handleMenuToggle}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li
          onClick={() => {
            handleViewChange("HOME");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleViewChange("CLASSY");
          }}
        >
          Classy
        </li>
        <li>Route</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
