export const OPEN_MODAL_RESULTADO = 'OPEN_MODAL_RESULTADO';
export const CLOSE_MODAL_RESULTADO = 'CLOSE_MODAL_RESULTADO';

export const openModalResultado = () => {
    return {
        type: OPEN_MODAL_RESULTADO,
    }
}

export const closeModalResultado = () => {
    return {
        type: CLOSE_MODAL_RESULTADO,
    }
}
