import React from 'react';

import { Spin } from 'antd';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loading: {
        margin: '20px 0',
        marginBottom: '20px',
        padding: '30px 50px',
        textAlign: 'center',
        background:' rgba(0, 0, 0, 0.05)',
        borderRadius: '4px'
    }
   
}))

function LoadingData(props) {
    const classes = useStyles();
    return (
        <div className={classes.loading}>
                <Spin />
        </div>
    );
}

export default React.memo(LoadingData);