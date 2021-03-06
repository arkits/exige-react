import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    titleText: {
        display: 'flex',
        flexGrow: '1',
        fontFamily: 'IBM Plex Mono',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    subtitleText: {
        fontFamily: 'IBM Plex Mono',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

function ExigeAppBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="primary">
                <Toolbar>
                    <Drawer />
                    <Typography className={classes.titleText} variant="h5" noWrap>
                        ~/Exige
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ExigeAppBar;
