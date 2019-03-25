import {
    OPEN_MODAL_RESPOSTA,
    CLOSE_MODAL_RESPOSTA
} from '../actions/modalRespostaActions';

const initialState = {
    open: false,
    resposta_correta: "",
    info_opened: false
}

export const modalResposta = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL_RESPOSTA:
            return Object.assign({}, state, { 
                open: true,
                resposta_correta: action.payload.resposta_correta,
                info_opened: action.payload.info_opened
            })
        case CLOSE_MODAL_RESPOSTA: 
            return Object.assign({}, state, {
                open: false,
                resposta_correta: "",
                info_opened: false
            })
        default:
            return state;
    }
}

