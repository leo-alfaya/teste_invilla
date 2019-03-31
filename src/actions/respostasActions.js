export const ADD_RESPOSTA = 'ADD_RESPOSTA';

export const addResposta = (name_personagem, points) => {
    return {
        type: ADD_RESPOSTA,
        payload: {
            name_personagem,
            points
        }
    } 
}
