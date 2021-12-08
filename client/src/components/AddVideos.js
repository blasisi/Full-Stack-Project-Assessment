import React, { useEffect, useState } from "react";

//On the page there must be another React component that will add a Video.
// - It should include fields to add a
// - Title
// - Url
const AddVideos = ({videoAdd}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
function addNewVideo() {
  videoAdd(title,url)
}

return (
  <>
    <button onClick={addNewVideo}>Add Video</button>
    <form>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.target.value)} type="text" />
      <label>URL</label>
      <input onChange={(e) => setUrl(e.target.value)} type="text" />
    </form>
  </>
);
};

export default AddVideos;
