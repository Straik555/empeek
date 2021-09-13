//Core
import React from "react";

//redux
import {useSelector} from "react-redux";

//components
import {AddItem} from "../AddItem";
import {Items} from "../Items";

export const ListItems = ({handleClick, active, deleteItem}) => {
    const {empeek} = useSelector(state => ({...state.items}))

    return (
        <div className={'list-items'}>
            <div className="title-items">
                <h3>Items</h3>
            </div>
            <AddItem />
            <div className="wrapper">
                {
                    empeek && empeek.length > 0 ? (
                        empeek.map(el =>
                            <Items
                                active={active}
                                key={el.id}
                                item={el}
                                handleClick={handleClick}
                                deleteItem={deleteItem}
                            />
                        )
                    ) : <p>Items not found</p>
                }
            </div>
        </div>
    )
}