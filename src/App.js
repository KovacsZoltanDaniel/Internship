// App.js
import React from "react";
import WeatherComponent from "./components/WeatherComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="logo.jpg" className="App-logo" alt="logo" />
        </div>
        <div className="title-container">
          <h1>Sapientia Weather Forecast App</h1>
        </div>
      </header>
      <main>
        <WeatherComponent />
      </main>
      <footer>
        <p>© All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;