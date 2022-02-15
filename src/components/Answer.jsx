import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    // createStyles({
    //     "button": {
    //         borderColor: "#FFB549",
    //         color: "#FFB549",
    //         fontWeight: 600,
    //         marginBottom: "8px",
    //         "&:hover": {
    //             backgroundColor: "#FFB549",
    //             color: "#fff"
    //         }
    //     }
    // }),
    root: {

    },
})
);

const Answer = (props) => {
    // const classes = useStyles; 

    return (
        <Button variant="contained" color='primary'>
            {props.content}
        </Button>
    );
};

export default Answer;