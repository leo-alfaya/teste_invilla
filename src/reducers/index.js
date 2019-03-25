import { combineReducers } from 'redux';
import { personagensReducer } from './personagensReducer';
import { respostasReducer } from './respostasReducer';
import { modalInfo } from './modalInfoReducer';
import { modalResposta } from './modalRespostaReducer';
import { modalResultado } from './modalResultadoReducer';

const rootReducers = combineReducers({
    personagens: personagensReducer,
    respostas: respostasReducer,
    modalInfo,
    modalResposta,
    modalResultado
})

export default rootReducers
