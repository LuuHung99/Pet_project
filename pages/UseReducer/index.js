// import React, {useReducer} from "react";

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// }

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function UseReducer(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
//       <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
//     </>
//   );
// }

// export default UseReducer;

// import React, { useState, useRef } from "react";
// import { Row, Col, Input, Submit } from "antd";

// const SearchTimeout = () => {
//   const styles = {
//     background: "rgba(240,240,240)",
//     color: "black",

//   };

//   return (
//     <Row style={{ marginTop: "40px", textAlign: "center" }}>
//       <Col
//         span={6}
//         style={{ margin: "0 auto", width: "auto", fontSize: '24px'}}
//       >
//         <div style={styles}>Learning REACT_JS</div>
//       </Col>
//     </Row>
//   );
// };

// export default SearchTimeout;

import React, { useState, useEffect } from "react";
import { getData } from "./api";

import { Card, Row, Col, Skeleton } from "antd";

const { Meta } = Card;

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataNews = async () => {
      const datas = await getData();
      console.log(datas);
      if (datas) {
        setData(datas[0]);
        console.log(datas[0].image.url);
      }
    };
    getDataNews();
  }, []);
  return (
    <Row style={{ marginTop: "50px" }}>
      <Col span={24} style={{ textAlign: "center" }}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={data.name} src={data.image.url} />}
        >
          <Meta title={data.name} description={data.description} />
        </Card>
      </Col>
    </Row>
  );
}

export default App;
