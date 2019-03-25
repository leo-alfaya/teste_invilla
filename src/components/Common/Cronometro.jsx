import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModalResultado } from '../../actions/modalResultadoActions';

const setTempoTermino = () => {
    let tempo = new Date();
    tempo = tempo.setMinutes(tempo.getMinutes() + 2);

    return tempo
}

const Cronometro = ({ openModalResultado }) => {
    const [ tempoTermino ] = useState(setTempoTermino())
    const [ tempoFinalizado, setTempoFinalizado ] = useState(false)

    const handleChange = (tempo) => {
        if(tempo.includes("milliseconds")) {
            setTempoFinalizado(true);
            openModalResultado();
        }
    }

    const filterTime = (tempo) => {
        if(!tempoFinalizado && !tempo.includes("miliseconds")){
            return tempo.replace("-", "");
        }

        return "0:00";
    }

    return (
        <p>
            <span>Tempo restante: </span> 
            <Moment date={tempoTermino} interval={1000} onChange={ handleChange } filter={ filterTime } durationFromNow></Moment>
        </p>
    )
}

Cronometro.propTypes = {
    openModalResultado: PropTypes.func
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        openModalResultado
    }, dispatch)

export default connect(
    null,
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Cronometro);
