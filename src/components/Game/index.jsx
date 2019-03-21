import React from 'react';
import './Game.scss';
import Grid from '@material-ui/core/Grid';
import ListaPersonagens from './ListaPersonagens/index'

const Game = () => {
    return (
        <Grid container className="game-container">
            <Grid container className="header"/>
            <Grid container className="content">
                <ListaPersonagens />
                <Grid container className="pagination">
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Game
