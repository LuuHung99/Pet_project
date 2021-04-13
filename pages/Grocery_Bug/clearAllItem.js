import React from 'react';
import {  Button } from 'antd';


function ClearAllItem(props) {
    return (
        <div>
            <div className="grocery_button">
                    <Button type="primary" onClick={props.deleteAllItems} >Clear Items</Button>
            </div>
        </div>
    );
}

export default ClearAllItem;