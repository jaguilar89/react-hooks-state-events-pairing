import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Buttons from "./Buttons.js";
import CommentSection from "./CommentsSection.js";

function App() {
  const [videoData, setVideoData] = useState(video);
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);
  const [isHidden, setIsHidden] = useState(false)

  function handleUpvote() {
    setUpvotes((upvotes) => upvotes + 1)
  };

  function handleDownvote() {
    setDownvotes((downvotes) => downvotes - 1)
  };

  function handleHideComments() {
    setIsHidden((isHidden) => !isHidden)
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <Header viewCount={videoData.views} uploadDate={videoData.createdAt}/>
    <Buttons 
      upvoteCount={upvotes} 
      downvoteCount={downvotes}
      onUpvote={handleUpvote}
      onDownvote={handleDownvote}
      onHideComments={handleHideComments}
      isHidden={isHidden}
       />
    <hr />
    <CommentSection commentsList={video.comments} isHidden={isHidden}/>
    </div>
  );
}

export default App;
