import React, { useState, useEffect } from 'react';
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
    const [ tempoTermino, _ ] = useState(setTempoTermino())
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
