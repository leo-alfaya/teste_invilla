import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CardPersonagem from './CardPersonagem';

const ListaPersonagens = (props) => {
    const {
        personagens,
        respostas,
        personagens_respondidos,
        setRespostas
    } = props

    return (
        <Grid container className="lista-personagens" justify="center" spacing={32}>
            {personagens.map(personagem => {
                if(personagens_respondidos.includes(personagem.name)) {
                    return (
                        <CardPersonagem 
                            key={ personagem.name }
                            personagem={ personagem }
                            disabled={true}
                        />
                    )
                } else {
                    return (
                        <CardPersonagem 
                            key={ personagem.name }
                            personagem={ personagem }
                            disabled={false}
                        />
                    )
                    
                }
            })}
        </Grid>
    )
}

ListaPersonagens.propTypes = {
    personagens: PropTypes.array,
    setRespostas: PropTypes.func
}

ListaPersonagens.defaultProps = {
    personagens: []
}

const mapStateToProps = state => {
    return {
        respostas: state.respostas.list,
        personagens_respondidos: state.respostas.names

    }
}

export default connect(
    mapStateToProps,
    null,
    null,
    {
        pure: false
    }
)(ListaPersonagens);
