import {
    SET_PERSONAGENS,
    SET_DETALHES,
    CLEAR_DETALHES
} from '../actions/personagensActions';

const initialState = {
    list: {},
    detalhesPersonagem: {}
}

export const personagensReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PERSONAGENS: 
            return Object.assign({}, state, {
                list: {...action.personagens}
            });
        case SET_DETALHES: 
            const {
                prop,
                value
            } = action.payload

            return Object.assign({}, state, {
                detalhesPersonagem: {
                    ...state.detalhesPersonagem,
                    [prop]:value
                }
            });
        case CLEAR_DETALHES:
            return Object.assign({}, state, {
                detalhesPersonagem: {}
            })
        default: 
            return state;
    }
}
