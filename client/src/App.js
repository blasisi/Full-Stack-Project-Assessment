import "./App.css";
import YoutubeVideo from "./components/YoutubeVideo";
import AddVideos from "./components/AddVideos"
import React, { useState } from "react";
import videoData from "./components/videoData.json";

function App() {
  const [filterVideos, setFilterVideos] = useState(videoData);

  function videoAdd (title, url){
    const newVideo = {title ,url};
    console.log(newVideo);
    setFilterVideos(filterVideos.concat([newVideo]));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideos videoAdd={videoAdd} />
      <YoutubeVideo   videos={filterVideos}/>
    </div>
  );
}

export default App;
