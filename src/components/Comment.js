import React from "react";
import CommentButtons from "./CommentButtons";

function Comment({ user, comment }) {
    return (
        <>
            <p style={{fontWeight: 'bold'}}> 
                {user} 
            </p>
            <p>
                {comment}
            </p>
            <CommentButtons />
        </>
    )
}

export default Comment;