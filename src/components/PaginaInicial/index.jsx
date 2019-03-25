import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const PaginaInicial = () => {
    return (
        <Grid container className="pagina-inicial">
            <Button component={ Link } to="/game">Iniciar o jogo</Button>
        </Grid>
    )
}

export default PaginaInicial
