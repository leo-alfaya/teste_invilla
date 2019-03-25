import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModalResposta } from '../../actions/modalRespostaActions';
import { addResposta } from '../../actions/respostasActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ModalResposta = (props) => {
    const {
        modalResposta: {
            open,
            resposta_correta,
            info_opened
        },
        closeModalResposta,
        addResposta
    } = props

    const [ inputName, setInputName ] = useState("");

    const handleInputChange = ({ currentTarget }) => {
        setInputName(currentTarget.value);
    }

    const handleEnterKey = ({ keyCode }) => {
        if(keyCode == 13){
            enviaResposta();
        }
    }

    const handleExit = () => {
        setInputName("");
    }

    const enviaResposta = () => {
        if(resposta_correta.toUpperCase() === inputName.toUpperCase()) {
            if(info_opened) {
                addResposta(resposta_correta, 5);
            } else {
                addResposta(resposta_correta, 10);
            }
        } else {
            addResposta(resposta_correta, 0);
        }

        closeModalResposta();
    }

    return (
        <Dialog
            open={ open }
            onClose={ closeModalResposta }
            onExit={ handleExit }
        >
            <DialogTitle>{ "Qual é o nome do personagem?" }</DialogTitle>
            <DialogContent>
                <TextField 
                    label="Nome do personagem"
                    value={ inputName }
                    autoFocus={ true }
                    onChange={ handleInputChange }
                    onKeyDown={ handleEnterKey }
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth={ true } onClick={ enviaResposta }>
                    Responder
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ModalResposta.propTypes = {
    modalResposta: PropTypes.object,
}


const mapStateToProps = state => {
    return {
        modalResposta: state.modalResposta
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        closeModalResposta,
        addResposta
    }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(ModalResposta);
