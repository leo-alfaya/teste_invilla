import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Game.scss';
import { getPersonagens } from  '../../actions/personagensActions' 
import Grid from '@material-ui/core/Grid';
import ListaPersonagens from './ListaPersonagens/index';
import Pagination from './ListaPersonagens/Pagination';
import ModalInfo from '../Modal/ModalInfo';

const Game = ({ personagens, getPersonagens }) => {
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
                <Grid container className="header"/>
                    <Grid container className="content">
                        <ListaPersonagens personagens={personagens.results}/>
                        <Pagination 
                            next={personagens.next}
                            previous={personagens.previous}
                            changePage={changePage}/>
                    </Grid>
            </Grid>
            <ModalInfo />
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
