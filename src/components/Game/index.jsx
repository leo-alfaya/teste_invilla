import React, { useState, useEffect} from 'react';
import './Game.scss';
import Grid from '@material-ui/core/Grid';
import ListaPersonagens from './ListaPersonagens/index';
import Pagination from './ListaPersonagens/Pagination';
import ModalInfo from '../Modal/ModalInfo';
import { getPeople } from '../../api/api_personagens';

const Game = () => {
    const [ respostas, setRespostas ] = useState({})
    const [ personagens, setPersonagens ] = useState({})
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        if(!loaded){
            getPeople(
                'https://swapi.co/api/people/?page=1',
                (people) => {
                    setPersonagens(people)
                    setLoaded(true);
                }
            );
        }
    });

    const changePage = (page, event) => {
        getPeople(
            page,
            (people) => {
                setPersonagens(people)
            }
        );
    }

    return (
        <Grid container className="game-container">
            <Grid container className="header"/>
            <Grid container className="content">
                <ListaPersonagens 
                    personagens={ personagens.results }
                    setRespostas={ setRespostas }
                />
                <Pagination 
                    prev={ personagens.previous }
                    next={ personagens.next }
                    changePage={changePage}
                />
            </Grid>

            <ModalInfo />
        </Grid>
    )
}

export default Game
