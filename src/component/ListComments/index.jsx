//Core
import React, {useState, useEffect} from "react";

//redux
import {useDispatch, useSelector} from "react-redux";

//component
import {AddComments} from "../AddComments";

//type
import types from "../../redux/types";

export const ListComments = ({comment}) => {
    const {empeek} = useSelector(state => ({...state.items}));
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('')
    const commentArray = empeek.find(el => el.id === comment)

    useEffect(() => {
        setNewComment('')
    }, [comment])

    const handleClickEnter = (e) => {
        if(newComment.length <= 1){
            return
        }

        if(e.keyCode=== 13 && e.ctrlKey){
            const option = {
                id: comment,
                message: newComment
            }
            dispatch({type: types.ADD_COMMENT_START, option})
            setNewComment('')
        }
    }
    return (
        <div className={'list-comments'}>
            <p>Comments #{comment}</p>
            <ul>
                {
                    commentArray && commentArray.list.length > 0 ? (
                        commentArray.list.map(el => <li key={el.id}><div></div>{el.message}</li>)
                    ) : <li>Comment not found</li>
                }
            </ul>
            <AddComments
                handleClickEnter={handleClickEnter}
                setNewComment={setNewComment}
                newComment={newComment}
            />
        </div>
    )
}