import React from 'react';
import { Button } from 'antd';

function Tabs(props) {
    const {items} = props;
    return (
        <div>
            <h1>
                {items.title}
            </h1>
            <Button type="primary">
                {items.button}   
            </Button>
            <p className="date">{items.date}</p>
            <div style={{paddingRight: '100px'}} className="text">
                {items.text}
            </div>
        </div>
    );
}

export default Tabs;