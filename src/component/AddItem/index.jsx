//Core
import React, {useState} from "react";

//Redux
import {useDispatch, useSelector} from "react-redux";

//Type
import types from "../../redux/types";

export const AddItem = () => {
    const {empeek} = useSelector(state => ({...state.items}))
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState('')
    const addItem = (e) => {
        e.preventDefault()
        if(newItem.length < 1){
            return
        }
        let max = empeek.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
        const id = empeek.length > 0 ? max.id + 1 : 1
        const option = {
            id,
            name: newItem,
            list: []
        }
        dispatch({type: types.ADD_ITEMS_START, option})
        setNewItem('')
    }
    return (
        <div className={'add-item'}>
            <input
                type="text"
                placeholder={'Type name here...'}
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>
                Add new
            </button>
        </div>
    )
}