import {
    OPEN_MODAL_RESULTADO,
    CLOSE_MODAL_RESULTADO
} from '../actions/modalResultadoActions';

const initialState = {
    open: false,
}

export const modalResultado = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL_RESULTADO:
            return Object.assign({}, state, { 
                open: true,
            })
        case CLOSE_MODAL_RESULTADO:
            return Object.assign({}, state, { 
                open: false,
            })
        default:
            return state;
    }
}

