import React from "react";

function Buttons({ 
            upvoteCount, 
            downvoteCount, 
            onUpvote, 
            onDownvote,
            onHideComments,
            isHidden
        }) {
    return (
        <div className="button">
            <button onClick={onUpvote}>{upvoteCount} 👍</button>
            <button onClick={onDownvote}>{downvoteCount} 👎</button>
            <br />
            <button onClick={onHideComments}> {isHidden ? "Show comments" : "Hide comments"} </button>
        </div>
    )
};

export default Buttons;