import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModalInfo } from '../../../actions/modaisActions';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';

const CardPersonagem = ({ personagem, openModalInfo }) => {
    const openInfo = () => {
        openModalInfo(personagem)
    }

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
    openModalInfo: PropTypes.func
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ openModalInfo }, dispatch)

export default connect(
    null,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(CardPersonagem);
