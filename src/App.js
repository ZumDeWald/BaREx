import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <div id="app">
      <header className="app-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sidebar />
    </div>
  );
}

export default App;
