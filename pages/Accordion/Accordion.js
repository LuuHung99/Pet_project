import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';


function Accordion(props) {
    const  {items} = props;
    return (
        <>
            <Row >
                <Col span={12} offset={6} className="infor">
                    <div className="question">
                        <h3>{items.title}</h3>
                        
                        <p>{items.infor}</p>
                        <div className="icon">
                            <PlusOutlined onClick={()=> props.showQuestion(items.id)}/>
                            <MinusOutlined className="" onClick={()=> props.hideQuestion(items.id)}/>
                        </div>
                        
                        
                        
                    </div>
                    
                </Col>
             </Row>
        </>
    );
}

export default Accordion;