import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cronometro from '../../Common/Cronometro';

const Header = () => {
    return (
        <Grid container justify="center" alignItems="center" className="header">
            <Grid item>
                <Cronometro />
            </Grid>
        </Grid>
    )
}

export default Header;
