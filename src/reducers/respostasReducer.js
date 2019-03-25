import { ADD_RESPOSTA } from '../actions/respostasActions';

const initialState = {
    list: [],
    names: []
}

export const respostasReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RESPOSTA:
            return Object.assign({}, state, {
                list: [...state.list, action.payload],
                names: [...state.names, action.payload.name_personagem]
            });
        default: 
            return state;
    } 
}
