import React from "react";
import { Row, Col } from "antd";

function Counter(props) {
  return (
    <Row style={{ margin: "60px" }}>
      <Col span={8}>
        <div style={{position: "relative", height: "17.5rem"}} >
          <img
            src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYyMDczOTQwMA&ixlib=rb-1.2.1&q=80&w=1080"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              left: 0,
              padding: '1rem',
              background: '#F5F5F5',
              color: '#fff',
              // transform: "translateY(100%)",
              opacity: '40%',
              transition: 'all .3s linear',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
             
            }}
          >
            <div>
              <h4>XPS</h4>
              <p>813 likes</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/profile-1610040298916-bd8cfecf5628image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
                alt=""
                style={{width: '2.5rem', height: '2.5rem', borderRadius: '50%'}}
              />
            </div>
          </div>
        </div>
      </Col>

      {/* <Col span={8}>
               <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYyMDczOTQwMA&ixlib=rb-1.2.1&q=80&w=1080"
                style={{width: '85%', height: '85%', objectFit: 'cover'}}
               />
           </Col>
           <Col span={8}>
               <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYyMDczOTQwMA&ixlib=rb-1.2.1&q=80&w=1080"
                style={{width: '85%', height: '85%', objectFit: 'cover'}}
               />
           </Col> */}
    </Row>
  );
}

export default Counter;
