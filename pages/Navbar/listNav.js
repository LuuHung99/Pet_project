import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
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
                            <ul className="list_menu"> 
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/project">Projects</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/profile">Profile</Link>
                            </ul>
                        </Router>
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row>
                
            </Header>
            
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}



export default listNav;