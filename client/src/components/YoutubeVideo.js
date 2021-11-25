import React, {useState} from "react";
import videoData from "./videoData.json";
import AddVideos from from "./AddVideos";

const YoutubeVideo = ()=>{
    console.log(videoData)
const [filterVideos, setFilterVideos] = useState(videoData);
const [counter, setCounter] =useState(0);
}
return (
    <div className="videoContainer">
        <AddVideos AddVideos={AddVideos} />
        {filterVideos.map((filterVideos)=>(
            <div key={filterVideos.url}>
             <h3>{filterVideos.title}</h3>
<iframe 
width="560" 
height="315" 
src={filterVideos.url("https://www.youtube.com/embed/{VIDEO_ID_GOES_HERE")}
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
></iframe>
))}
</div>
        );
        };

export default YoutubeVideo;