export const OPEN_MODAL_INFO = 'OPEN_MODAL_INFO';
export const CLOSE_MODAL_INFO = 'CLOSE_MODAL_INFO';

export const openModalInfo = (personagem) => {
    return {
        type: OPEN_MODAL_INFO,
        personagem
    }
}

export const closeModalInfo = () => {
    return {
        type: CLOSE_MODAL_INFO,
    }
}
