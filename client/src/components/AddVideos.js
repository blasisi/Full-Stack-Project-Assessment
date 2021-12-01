import React, { useState } from "react";

//On the page there must be another React component that will add a Video.
// - It should include fields to add a
// - Title
// - Url
const AddVideos = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
};
function addNewVideo(title, url) {
console.log({title, url})
}

return (
  <Fragment>
    <div className ="addVideo">
    <button onClick={AddVideos}>Add Video</button>
    <form>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <label>URL</label>
      <input onChange={(e) => setUrl(e.target.value)} value={title} />
      <button classNAME="addButton" ></button>
    </form>
    </div>
  </Fragment>
);

export default AddVideos;
