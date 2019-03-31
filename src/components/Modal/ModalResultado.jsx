import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ls from 'local-storage';
import { closeModalResultado } from '../../actions/modalResultadoActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ModalResultado = (props) => {
    const {
        modalResultado: {
            open
        },
        respostas,
        history,
        closeModalResultado
    } = props

    const [ resultado, setResultado ] = useState(0);
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");

    const calculaResultado = () => {
        const resultado = respostas.reduce((acc, resposta) => {
            return acc + resposta.points;
        }, 0);

        setResultado(resultado);
    }

    const handleNameChange = ({ currentTarget }) => {
        setNome(currentTarget.value);
    }

    const handleEmailChange = ({ currentTarget }) => {
        setEmail(currentTarget.value);
    }

    const salvarDados = () => {
        const value = {
            nome,
            email,
            resultado
        }

        ls.set(nome, value);
        closeModalResultado();
        history.push("/");

    }

    return (
        <Dialog
            open= { open }
            onEnter={ calculaResultado }
            className="modal-resultado">
            <DialogTitle>{"Resultados do game"}</DialogTitle>
            <DialogContent>
                <p>{ resultado } pontos.</p>
                <p>Preencha o formulário abaixo para salvar os dados</p>
                <TextField
                    className="input-text"
                    fullWidth
                    autoFocus={ true }
                    label="Nome"
                    variant="outlined"
                    value={ nome }
                    onChange={ handleNameChange }/>
                <TextField
                    className="input-text"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={ email }
                    onChange={ handleEmailChange }/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth={true} onClick={ salvarDados }>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ModalResultado.propTypes = {
        modalResultado: PropTypes.object,
        respostas: PropTypes.array,
        history: PropTypes.object,
        closeModalResultado: PropTypes.func
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        closeModalResultado,
    }, dispatch)


const mapStateToProps = state => {
    return {
        modalResultado: state.modalResultado,
        respostas: state.respostas.list
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
    null,
    {
        pure: false
    }
)(ModalResultado);
