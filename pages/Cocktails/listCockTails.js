import React from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";

function listCockTails(props) {
  const { item } = props;
  return (
    <Row style={{marginBottom: '50px'}} >
      <Col  style={{boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%)', width: '130%',}}  >
          <div > 
              <img style={{width: '100%', height: '380px'}} src={item.images} />
          </div>
          <div style={{padding: '20px 20px',}}>
            <div style={{fontSize: '30px', fontWeight: 'bold'}}>{item.name}</div>
            <div style={{letterSpacing: '4px', fontWeight: 'bold', fontSize: '18px'}}>{item.glass}</div>
            <div style={{marginTop: '10px', opacity: '0.5'}}>{item.info}</div>
            <div style={{marginTop: '15px', }}>
                <Button type="primary" style={{letterSpacing: '3px'}} onClick={() =>props.handleClick(item.id)}>Details</Button>
            </div>
          </div>
      </Col>
    </Row>
  );
}

export default listCockTails;
