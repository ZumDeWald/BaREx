import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="menu-hide">
      <FontAwesomeIcon icon="chevron-left" className="menu-chev" />
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li>Classy</li>
        <li>Route</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
