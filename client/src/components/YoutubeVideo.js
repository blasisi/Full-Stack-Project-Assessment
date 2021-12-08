import React, { useState } from "react";
import VideoCard from "./VideoCard";
import AddVideos from  "./AddVideos";


// function addNewVideo(title, url) {
//     console.log({title, url})



const YoutubeVideo = ({videos}) => {
  const [vote, setVote] = useState(0);

// const filterVideos = props.videos;

const [counter, setCounter] = useState(0);
  const cards = videos.map((video) => {



    return <VideoCard video={video}/>;
    // <AddVideos addNewVideo={addNewVideo}/>;
    //two button, increase and decrese


  });
  return <div>{cards}</div>;
};


export default YoutubeVideo;
