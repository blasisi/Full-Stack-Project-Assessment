import React, { useState } from "react";

const VideoCard = ({ video }) => {
  const [vote, setVote] = useState(0);

  const index = video.url.indexOf("v=");
  const indexvideoId = video.url.slice(index + 2);

  function increaseVote() {
    setVote(vote + 1);
  }

  function decreaseVote() {
    setVote(vote - 1);
  }

  return (
    <div>
      <h3>{video.title}</h3>
      <h2>{video.rating} </h2>

      <div>
        <button className="like" onClick={increaseVote}>
          Like{" "}
        </button>
        <p>{vote}</p>
        <button className="dislike" onClick={decreaseVote}>
          disLike{" "}
        </button>
      </div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${indexvideoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
