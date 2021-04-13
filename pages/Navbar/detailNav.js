import React from 'react';
import { Result, Button } from 'antd';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';

function DetailNav(props) {
    return (
        <>
        <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        
  />
            <Link to='/'><Button type="primary">Back Home</Button></Link>
 </>
    );
}

export default DetailNav;