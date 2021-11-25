import React from "react";
import "./App.css";
import YoutubeVideo from "./components/YoutubeVideo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <YoutubeVideo />
    </div>
  );
}

export default App;
