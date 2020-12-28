import { useState } from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ view, setView }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={
          menuOpen ? "menu-chev pointer" : "menu-chev pointer rotate180"
        }
        onClick={handleMenuToggle}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li
          className={view === "HOME" ? "active" : ""}
          onClick={() => {
            handleViewChange("HOME");
          }}
        >
          Home
        </li>
        <li
          className={view === "CLASSY" ? "active" : ""}
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
