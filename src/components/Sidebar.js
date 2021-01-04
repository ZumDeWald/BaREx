import { useState } from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Sidebar = ({ view, setView }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleViewChange = (newView, path) => {
    handleMenuToggle();
    setView(newView);
    history.push(path);
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
            handleViewChange("HOME", "/");
          }}
        >
          Home
        </li>
        <li
          className={view === "CLASSY" ? "active" : ""}
          onClick={() => {
            handleViewChange("CLASSY", "/");
          }}
        >
          Classy
        </li>
        <li
          className={view === "ROUTE" ? "active" : ""}
          onClick={() => {
            handleViewChange("ROUTE", "/route");
          }}
        >
          Route
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
