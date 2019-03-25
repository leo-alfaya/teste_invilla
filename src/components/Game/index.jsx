import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Game.scss';
import { getPersonagens } from  '../../actions/personagensActions' 
import Grid from '@material-ui/core/Grid';
import Header from './Header/index';
import ListaPersonagens from './ListaPersonagens/index';
import Pagination from './ListaPersonagens/Pagination';
import ModalInfo from '../Modal/ModalInfo';
import ModalResposta from '../Modal/ModalResposta';
import ModalResultado from '../Modal/ModalResultado';

const Game = ({ personagens, getPersonagens, history }) => {
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        if(!loaded){
            getPersonagens('https://swapi.co/api/people/?page=1')
            setLoaded(true)
        }
    });

    const changePage = (page) => {
        getPersonagens(page);
    }

    return (
        <Fragment>
            <Grid container className="game-container">
                <Header />
                <Grid container className="content">
                    <ListaPersonagens personagens={personagens.results}/>
                    <Pagination 
                        next={personagens.next}
                        previous={personagens.previous}
                        changePage={changePage}/>
                </Grid>
            </Grid>
            <ModalInfo />
            <ModalResposta />
            <ModalResultado history={history}/>
        </Fragment>
    )
}

Game.propTypes = {
    personagens: PropTypes.object,
    getPersonagens: PropTypes.func
}

const mapStateToProps = state => {
    return {
        personagens: state.personagens.list
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ getPersonagens }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Game);
