import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardPersonagem from './CardPersonagem';

const ListaPersonagens = ({ personagens }) => {
    return (
        <Grid container className="lista-personagens" justify="center" spacing={32}>
            {personagens.map(personagem => {
                return (
                    <CardPersonagem 
                        key={ personagem.name }
                        { ...personagem }/>
                )
            })}
        </Grid>
    )
}

ListaPersonagens.propTypes = {
    personagens: PropTypes.array
}

ListaPersonagens.defaultProps = {
    personagens: []
}

export default ListaPersonagens
