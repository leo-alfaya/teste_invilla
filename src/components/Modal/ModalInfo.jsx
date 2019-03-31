import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModalInfo } from '../../actions/modalInfoActions';
import { 
    getSpecies,
    getPlanet,
    getMovies,
    getVehicles,
    clearDetalhes
} from '../../actions/personagensActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const ModalInfo = (props) => {
    const {
        modalInfo: {
            open,
            personagem
        },
        detalhesPersonagem,
        closeModalInfo,
        clearDetalhes,
        getSpecies,
        getPlanet,
        getMovies,
        getVehicles
    } = props

    const handleEnter = () => {
        if(personagem.species.length){
            getSpecies(personagem.species)
        }

        if(personagem.homeworld.length) {
            getPlanet(personagem.homeworld)
        }

        if(personagem.films.length) {
            getMovies(personagem.films)
        }

        if(personagem.vehicles.length) {
            getVehicles(personagem.vehicles)
        }
    }

    const handleExit = () => {
        clearDetalhes()
    }

    return (
        <Dialog
            open= {open }
            onClose={ closeModalInfo}
            onEnter={ handleEnter }
            onExit={ handleExit }
        >
            <DialogTitle>{"Detalhes do Personagem"}</DialogTitle>
            <DialogContent>
                <p>{ `Specie: ${detalhesPersonagem.species}` }</p>
                <p>{ `Height: ${personagem.height}` }</p>
                <p>{ `Hair: ${personagem.hair_color}` }</p>
                <p>{ `Planet: ${detalhesPersonagem.homeworld}` }</p>
                <p>{ `Movies: ${detalhesPersonagem.movies}` }</p>
                <p>{ `Vehicles: ${detalhesPersonagem.vehicles || "none"}` }</p>
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth={true} onClick={ closeModalInfo }>
                    Voltar ao game
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ModalInfo.propTypes = {
    modalInfo: PropTypes.object,
    detalhesPersonagem: PropTypes.object,
    closeModalInfo: PropTypes.func,
    clearDetalhes: PropTypes.func,
    getSpecies: PropTypes.func,
    getPlanet: PropTypes.func,
    getMovies: PropTypes.func,
    getVehicles: PropTypes.func
}


const mapStateToProps = state => {
    return {
        modalInfo: state.modalInfo,
        detalhesPersonagem: state.personagens.detalhesPersonagem
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        getSpecies,
        getPlanet,
        getMovies,
        getVehicles,
        closeModalInfo,
        clearDetalhes
    }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(ModalInfo);
