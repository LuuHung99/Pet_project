import React from 'react';
import { Layout } from 'antd';
import { Card, Row, Col, Skeleton } from "antd";
import "antd/dist/antd.css";


const { Header, Footer, Sider, Content } = Layout;
import HeaderPager from './header';
import FooterPager from './footer';

function layout(props) {
    return (
        <Layout>
            <HeaderPager />
            <Content>
                <Row>
                    <Col span={12} offset={6}>
                        {props.children}
                    </Col>
                </Row>
            </Content>
            <FooterPager />
        </Layout>
    );
}

export default layout;