import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardPersonagem from './CardPersonagem';

const ListaPersonagens = () => {
    return (
        <Grid container className="lista-personagens" justify="space-between" spacing={32}>
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
            <CardPersonagem />
        </Grid>
    )
}

export default ListaPersonagens
