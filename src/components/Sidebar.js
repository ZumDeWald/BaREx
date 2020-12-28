import logo from "../logo.svg";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="">
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
