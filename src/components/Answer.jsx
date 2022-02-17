import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';

const Answer = (props) => {
    // const classes = useStyles; 
    return (
        <Button variant="contained" color='primary'>
            {props.content}
        </Button>
    );
};

export default Answer;