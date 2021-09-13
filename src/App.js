//Core
import React, {useState} from "react";

//redux
import {useDispatch} from "react-redux";

//components
import {Layout} from "./component/Layout";
import {ListItems} from "./component/ListItems";
import {ListComments} from "./component/ListComments";

//type
import types from "./redux/types";

export const App = () => {

    const dispatch = useDispatch()
    const [comment, setComment] = useState(1)
    const handleClick = id => {
        setComment(id)
    }
    const deleteItem = id => {
        if(id === comment){
            setComment(1)
        }
        dispatch({type: types.DELETE_ITEM_START, id})
    }

    return (
      <Layout>
        <ListItems
            active={comment}
            handleClick={handleClick}
            deleteItem={deleteItem}
        />
        <ListComments comment={comment} />
      </Layout>
)
}