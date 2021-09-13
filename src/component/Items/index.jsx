//Core
import React from "react";

export const Items = ({item, handleClick, active, deleteItem}) => {

    return (
        <div className={`item-block ${item.id === active ? 'active' : ''}`}>
            <div className="title" onClick={() => handleClick(item.id)}>
                {item.name}
                <span>{item.list.length}</span>
            </div>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    )
}