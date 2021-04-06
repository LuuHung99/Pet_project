import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

function ReviewsComplete(props) {
    return (
        <>
            <Row className="container">
                <Col span={12} offset={6} className="row review">
                    <div className="review__circle">
                        
                    </div>
                    <div className="review__img">
                        <img 
                            style={{width: '150px', height: '150px', borderRadius: '50%'}}
                            src={props.url}
                            alt=""
                        >

                        </img>
                    </div>
                    <div className="review__info">
                        <div className="review__name">
                            <b>{props.name}</b>
                        </div>
                        <div className="review__direction">
                            {props.direction}
                        </div>
                    </div>
                    <div className="review__text">
                        <p style={{textAlign: 'center', margin: '30px'}}>{props.text}</p>
                    </div>
                    <div className="review__icon">
                        <LeftOutlined />
                        <RightOutlined />
                    </div>
                    <div className="review___button">
                        <button>Subprise me</button>
                    </div>
                </Col>
            </Row>

        </>

    );
}

export default ReviewsComplete;