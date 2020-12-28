import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeView from "./components/HomeView";
import Classy from "./components/Classy";

import "./App.css";

function App() {
  const [view, setView] = useState("HOME");

  return (
    <div id="app">
      <Sidebar setView={setView} />
      <header className="app-header">
        <div>
          <span className="blue">Ba</span>sic <span className="blue">R</span>
          eact <span className="blue">Ex</span>ample - BaREx
        </div>
      </header>
      {view === "HOME" && <HomeView />}
      {view === "CLASSY" && <Classy />}
    </div>
  );
}

export default App;
