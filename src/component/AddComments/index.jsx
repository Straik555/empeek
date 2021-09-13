// Core
import React from "react";

export const AddComments = ({handleClickEnter, setNewComment, newComment}) => {
    return (
        <div className={'add-comment'}>
            <div></div>
            <textarea
                cols="30"
                rows="10"
                onKeyDown={ e => handleClickEnter(e)}
                onChange={e => setNewComment(e.target.value)}
                value={newComment}
            >
            </textarea>
        </div>
    )
}