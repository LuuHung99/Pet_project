import React from "react";
import * as actions from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

function ButtonComponent(props) {
  const dispatch = useDispatch();
  // const state = getState();
  const count = useSelector(state => state.counter.count);
  console.log(count);

  const clickButton = () => {
    if (props.type === "increment") {
      dispatch(actions.incrementCounter(count)); //counter lay trong rootReducer
    } else if (props.type === "decrement") {
      dispatch(actions.decrementCounter(count));
    }
    // console.log('hi');
  };
  return <button onClick={() => clickButton()}>{props.children}</button>;
}

export default React.memo(ButtonComponent);
