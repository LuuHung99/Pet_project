import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

function ReviewsComplete(props) {
    const {items} = props;
    return (
        <>
            <Row className="container">
                <Col span={8} offset={4} style={{textAlign: 'center', padding: '30px', marginBottom: '20px'}} className="row review">
                    <div className="review__circle">
                        
                    </div>
                    <div className="review__img">
                        <img 
                            style={{width: '150px', height: '150px', borderRadius: '50%'}}
                            src={items.url}
                            alt=""  
                        >

                        </img>
                    </div>
                    <div className="review__info">
                        <div className="review__name">
                            <b>{items.name}</b>
                        </div>
                        <div className="review__direction">
                            {items.direction}
                        </div>
                    </div>
                    <div className="review__text">
                        <p style={{ margin: '30px'}}>{items.text}</p>
                    </div>
                    <div className="review__icon">
                        <LeftOutlined />
                        <RightOutlined />
                    </div>
                    <div className="review___button">
                        <button  onClick={()=> props.showNext(items.id)} >Subprise me</button>
                    </div>
                </Col>
            </Row>

        </>

    );
}

export default ReviewsComplete;