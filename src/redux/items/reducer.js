//Core
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//type
import types from "../types";

const initialState = {
    empeek: [
        {
            id: 1,
            name: 'First item with custom name',
            list: [
                {
                    id: 1,
                    message: 'Beatae corporis culpa distinctio eius illum modi odio quo totam veniam voluptatem. Accusantium adipisci amet, architecto asperiores cum laborum perferendis sapiente. Ad facere neque quidem, temporibus voluptas voluptates. Enim, eveniet.'
                },
                {
                    id: 2,
                    message: 'Aspernatur itaque quia quisquam repudiandae unde! Assumenda cumque distinctio esse ex harum, hic, id laudantium necessitatibus non obcaecati, perferendis perspiciatis quae unde voluptatem voluptates. Eos facere laborum modi quos repellat.'
                },
            ]
        },
        {
            id: 2,
            name: 'Second  item is active',
            list: [
                {
                    id: 1,
                    message: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                },
                {
                    id: 2,
                    message: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                },
                {
                    id: 3,
                    message: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
                }
            ]
        }
    ]
}

const addComment = (state, payload) => {
   const item = state.empeek.map(el => {
        if(el.id === payload.id){
            const id = el.list.length + 1
            const option = {
                id,
                message: payload.message
            }
            return {
                ...el,
                list: el.list.concat(option)
            }
        }
        return el
    });
   return item
}

const items = (state = initialState, { type, payload }) => {
    switch (type){
        case types.ADD_ITEMS_SUCCESS:
            return {
               empeek: state.empeek.concat(payload)
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                empeek: state.empeek.filter(el => el.id !== payload)
            }
        case types.ADD_COMMENT_SUCCESS:
            return {
                empeek: addComment(state, payload)
            }
        default:
            return state;
    }
}

const authConfig = {
    key: 'Empeek-items',
    storage,
    white: ['items']
};

export default persistReducer(authConfig, items);