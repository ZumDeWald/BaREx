import { useState } from "react";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  const [view, setView] = useState("HOME");

  return (
    <div id="app">
      <Sidebar />
      <main>
        <header className="app-header">
          <div>
            <span className="blue">Ba</span>sic <span className="blue">R</span>
            eact <span className="blue">Ex</span>ample - BaREx
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
