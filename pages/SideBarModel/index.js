import React from 'react';
import Model from './model';
import SideBar from './slideBar';
import DetailSlideBar from './detailSlideBar';

function SlideBarModel(props) {
    return (
        <>
            <SideBar />
            <Model />
            {/* <DetailSlideBar /> */}
        </>
    );
}


export default SlideBarModel;