import React from "react";
import "antd/dist/antd.css";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

function TodoItems({ todoList, removeTodo, updateTodoList }) {
  // const {list, removeTodo, updateTodoList} = items.props;

  return (
    <>
      {todoList.map((item) => {
        const { id, title } = item;
        return (
          <div className="grocery_items" key={id}>
            <div className="grocery_text">
              <h3>{title}</h3>
            </div>

            <div className="grocery_icons">
              <EditTwoTone
                onClick={() => updateTodoList(id)}
              />
              <DeleteTwoTone onClick={() => removeTodo(id)} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoItems;
