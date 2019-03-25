import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModalInfo } from '../../../actions/modalInfoActions';
import { openModalResposta } from '../../../actions/modalRespostaActions';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';

const CardPersonagem = ({ personagem, disabled, openModalInfo, openModalResposta }) => {
    const [ infoOpened, setInfoOpened ] = useState(false)

    const openInfo = () => {
        setInfoOpened(true)
        openModalInfo(personagem)
    }

    const openResposta = () => {
        openModalResposta(personagem.name, infoOpened)
    }

    const img_personagem = personagem.name.split(" ").join("_").toLowerCase()

    const img = `img/${img_personagem}.jpg`

    return (
        <Grid item xs={3}>
            <Card className="card-personagem">
                <CardMedia
                    className="img-personagem"
                    image={img || 'img/star_wars.jpg'}
                />
                <CardActions className="acoes">
                    <Fab variant="extended" size="large" className="button" onClick={ openResposta } disabled={disabled}>
                       <span>?</span>
                    </Fab>
                    <Fab variant="extended" size="large" className="button" onClick={ openInfo }>
                       <span>...</span>
                    </Fab>
                </CardActions>
            </Card>
        </Grid>
    )
}

CardPersonagem.propTypes = {
    personagem: PropTypes.object,
    openModalInfo: PropTypes.func,
    openModalResposta: PropTypes.func
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ openModalInfo, openModalResposta }, dispatch)

export default connect(
    null,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(CardPersonagem);
