import React from 'react';
import LayoutPager from './layout';
import Content from './content';
import "antd/dist/antd.css";

function Users(props) {
    return (
        <LayoutPager>
            <Content />
        </LayoutPager>
    );
}

export default Users;