import { combineReducers } from 'redux';
import { personagensReducer } from './personagensReducer';
import { modalInfo } from './modaisReducers';

const rootReducers = combineReducers({
    personagens: personagensReducer,
    modalInfo
})

export default rootReducers
