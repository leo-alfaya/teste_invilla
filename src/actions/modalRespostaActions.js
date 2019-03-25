export const OPEN_MODAL_RESPOSTA = 'OPEN_MODAL_RESPOSTA';
export const CLOSE_MODAL_RESPOSTA = 'CLOSE_MODAL_RESPOSTA';

export const openModalResposta = (resposta_correta, info_opened) => {
    return {
        type: OPEN_MODAL_RESPOSTA,
        payload: {
            resposta_correta,
            info_opened            
        }
    }
}

export const closeModalResposta = () => {
    return {
        type: CLOSE_MODAL_RESPOSTA,
    }
}
