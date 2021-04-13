import React from 'react';

import {CloseSquareTwoTone, BankTwoTone,
    ContactsTwoTone,FolderOpenTwoTone
} from '@ant-design/icons'

import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function SlideBar(props) {

    return (
        <div>
            <div className="icon_sidebar">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </div>
            <div className="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar_text">
                        Coding Addict
                    </div>
                    <div className="sidebar_icons">
                        <CloseSquareTwoTone />
                    </div>
                </div>
                <div className="sidebar__list">
                    <ul>
                        <li><BankTwoTone /><p>Home</p></li>
                        <li><ContactsTwoTone /><p>Team</p></li>
                        <li><FolderOpenTwoTone /><p>Project</p></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default SlideBar;