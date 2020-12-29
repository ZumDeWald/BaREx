import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeView from "./components/HomeView";
import Classy from "./components/Classy";
import RouteView from "./components/RouteView";
import { Switch, Route } from "react-router-dom";

import itemData from "./components/items";
import "./App.css";

function App() {
  const [view, setView] = useState("HOME");
  const [items, setItems] = useState(itemData);

  return (
    <div id="app">
      <Sidebar view={view} setView={setView} />
      <header className="app-header">
        <div>
          <span className="blue">Ba</span>sic <span className="blue">R</span>
          eact <span className="blue">Ex</span>ample - BaREx
        </div>
      </header>
      {view === "HOME" && <HomeView items={items} setItems={setItems} />}
      {view === "CLASSY" && <Classy />}
      <Switch>
        <Route
          exact
          path="/route"
          render={() => <RouteView setView={setView} />}
        />
      </Switch>
    </div>
  );
}

export default App;
