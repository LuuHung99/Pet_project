import React from 'react';
import {Row, Col} from 'antd';

function LoadingPage(props) {
    return (
        <Row style={{ textAlign: "center" }}>
            <Col span={24} style={{marginTop: '60px'}}>
                <h1 style={{fontSize: '30px'}}>Loading ...</h1>
            </Col>
        </Row>
    );
}

export default LoadingPage;