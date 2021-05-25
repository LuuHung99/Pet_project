import React, {useState, useEffect} from 'react';
import {Row, Col} from 'antd';
import {getDataCart} from './api';

function index(props) {
    const [dataCart, setDataCart] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getDataCart();
            if(data) {
                setDataCart(data);
                console.log(data);
            }
        }
        getData();
    },[])
    return (
        <Row>
          <Col span={16} style={{display: 'flex', backgroundColor: '#2680c0', width: '100%', height: 'auto'}}>
            <h1>UseReducer</h1>
            <ShoppingCartOutlined />
          </Col>  
        </Row>
    );
}

export default index;