import React from 'react';
import Model from './model';
import SideBar from './slideBar';

function SlideBarModel(props) {
    return (
        <div className="side_container">
            <SideBar />
            <Model />
        </div>
    );
}


export default SlideBarModel;