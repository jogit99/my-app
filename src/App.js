import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded {" "}
          <a href=" https://github.com/jogit99/my-app.git" target="_blank">
            Open-source code
          </a>
          by Jo
        </footer>
      </div>
    </div>
  );
}
