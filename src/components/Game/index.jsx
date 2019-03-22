import React, { useState, useEffect} from 'react';
import './Game.scss';
import Grid from '@material-ui/core/Grid';
import ListaPersonagens from './ListaPersonagens/index';
import Pagination from './ListaPersonagens/Pagination';
import { getPeople } from '../../api/api_personagens';

const Game = () => {
    const [ personagens, setPersonagens ] = useState({})
    const [ allPersonagens, setAllPersonagens ] = useState({})
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        if(!loaded){
            getPeople(
                'https://swapi.co/api/people/?page=1',
                (people) => {
                    setPersonagens(people)
                    setAllPersonagens({page1: people.results})
                    setLoaded(true);
                }
            );
        }
    });

    const changePage = (page, event) => {
        getPeople(
            page,
            (people) => {
                setPersonagens({ 
                    all: event === "next" ? [...personagens.all, people.results] : personagens.all,
                    ...people
                })
            }
        );
    }

    console.log(allPersonagens)

    return (
        <Grid container className="game-container">
            <Grid container className="header"/>
            <Grid container className="content">
                <ListaPersonagens personagens={ personagens.results }/>
                <Pagination 
                    prev={ personagens.previous }
                    next={ personagens.next }
                    changePage={changePage}
                />
            </Grid>
        </Grid>
    )
}

export default Game
