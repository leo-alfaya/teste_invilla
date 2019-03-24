import {
    OPEN_MODAL_INFO,
    CLOSE_MODAL_INFO
} from '../actions/modaisActions';

const initialState = {
    open: false,
    personagem: {}
}

export const modalInfo = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL_INFO:
            return Object.assign({}, state, { 
                open: true,
                personagem: action.personagem
            })
        case CLOSE_MODAL_INFO: 
            return Object.assign({}, state, {
                open: false, 
                personagem: {}
            })
        default:
            return state;
    }
}

