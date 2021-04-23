import React from "react";
import TodoList from "./todoList";

function Grocery_Bug(props) {
  return (
    <div>
      <div className="grocery_container">
        <div className="grocery_title">
          <h1 color="red">Grocery Bug</h1>
        </div>
        {/* <TodoForm /> */}
        <TodoList />
        {/* <ClearAllItem /> */}
      </div>
    </div>
  );
}

export default Grocery_Bug;
