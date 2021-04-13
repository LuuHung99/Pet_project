import React from 'react';
import 'antd/dist/antd.css';
import DetailNav from './detailNav';
import Home from './home';
import About from './about';
import Projects from './project';
import Contact from './contact';
import Profile from './profile';

import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
    TwitterOutlined, 
    LoadingOutlined,
     Icon,
      SmileTwoTone, 
      HeartTwoTone, 
      CheckCircleTwoTone} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function listNav(props) {
    return (
        <Layout>
            <Header>
                <Row className="nav_menu">
                    <Col span={4} className="logo">
                        Codding Addict
                    </Col>
                    <Col span={16}>
                        <Router>
                            <div>
                                <ul className="list_menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                </ul>

                                <hr />

                                {/*
                                A <Switch> looks through all its children <Route>
                                elements and renders the first one whose path
                                matches the current URL. Use a <Switch> any time
                                you have multiple routes, but you want only one
                                of them to render at a time
                                */}
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route path="/about">
                                        <About />
                                    </Route>
                                    <Route path="/projects">
                                        <Projects />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                    <Route path="/profile">
                                        <Profile />
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </Col>
                    <Col span={4}>
                        <TwitterOutlined />
                        <LoadingOutlined /> 
                        <SmileTwoTone />
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                    </Col>
                </Row>
            </Header>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default listNav;