import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

const Pagination = ({ previous, next, changePage }) => {
    const renderButton = (url, event, text) => {
        if(url) {
            return (
                <Grid item>
                    <Fab variant="extended" className="button" onClick={handleClick[event]}>{text}</Fab>
                </Grid>
            )  
        }
         return null
    }

    const handleClick = {
        prevPage: () => changePage(previous, "prev"),
        nextPage: () => changePage(next, "next")
    }

    return (
        <Grid container className="pagination" justify="center" spacing={32}>
            {renderButton(previous, "prevPage", "Página Anterior")}
            {renderButton(next, "nextPage", "Próxima Página")}
        </Grid>
    )
}

Pagination.propTypes = {
    prev: PropTypes.string,
    next: PropTypes.string,
    changePage: PropTypes.func
}

export default Pagination
