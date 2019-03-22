import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalInfoContext }  from '../../Modal/ModalInfo'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';

const CardPersonagem = ({ name, openInfo }) => {
    const modalInfoContext = useContext(ModalInfoContext)

    console.log(modalInfoContext)
    return (
        <Grid item xs={3}>
            <Card className="card-personagem">
                <CardMedia
                    className="img-personagem"
                    image={'img/star_wars.jpg'}
                />
                <CardActions className="acoes">
                    
                    <Fab variant="extended" size="large" className="button">
                       <span>?</span>
                    </Fab>
                    <Fab variant="extended" size="large" className="button">
                       <span>{name}</span>
                    </Fab>
                    <Fab variant="extended" size="large" className="button">
                       <span>...</span>
                    </Fab>
                </CardActions>
            </Card>
        </Grid>
    )
}

CardPersonagem.propTypes = {
    name: PropTypes.string,
    openInfo: PropTypes.func
}

export default CardPersonagem
