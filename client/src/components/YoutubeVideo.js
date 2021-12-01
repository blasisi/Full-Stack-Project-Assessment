import React, { useState } from "react";
import VideoCard from "./VideoCard";
import videoData from "./videoData.json";
// import AddVideos from from "./AddVideos";

const YoutubeVideo = () => {
  const [vote, setVote] = useState(0);

  console.log(videoData);
  const [filterVideos, setFilterVideos] = useState(videoData);
  const [counter, setCounter] = useState(0);
  const cart = filterVideos.map((video) => {
    return <VideoCard video={video}/>;

    //two button, increase and decrese
  });
  return <div>{cart}</div>;
};

export default YoutubeVideo;
