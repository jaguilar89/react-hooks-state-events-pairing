import React from "react";
import Comment from "./Comment";

function CommentsSection({ commentsList, isHidden }) {
    const commentLength = commentsList.length;
    const className = isHidden ? "hidden" : null;

    const comments = commentsList.map((userComment) => {
        return <Comment 
                    key={userComment.id} 
                    user={userComment.user} 
                    comment={userComment.comment}     
                />
    });

    return (
        <div className={className}>
            <h2>{commentLength} Comments</h2>
            {comments}
        </div>
    )
};

export default CommentsSection;