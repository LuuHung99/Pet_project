import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import ClearAllItem from "./clearAllItem";

const listItems = [
  {
    id: 1,
    name: "hello",
  },

  {
    id: 2,
    name: "world",
  },

  {
    id: 3,
    name: "dog",
  },
];

function TodoList(props) {
  const [listTodo, setListTodo] = useState(listItems);
  const deleteAllItems = () => {
    const newList = listTodo.filter((e) => {
      console.log(e);
    });
    setListTodo(newList);
  };

  const handleAddTodo = (val) => {
    console.log(val);
    const newTodo = {
      id: listTodo.length + 1,
      name: val.name,
    };

    const setTodoList = [...listTodo, newTodo];
    setListTodo(setTodoList);
  };

  const removeTodo = (selected) => {
    const removeList = listTodo.filter((e) => {
      if (e.id !== selected)
        return e;
        // && (
        //   <div>
        //     <h4
        //       style={{
        //         width: "auto",
        //         height: "30px",
        //         backgroundColor: "yellow",
        //         color: "red",
        //         top: "2px",
        //         textAlign: "center",
        //       }}
        //     >
        //       Delete items successfully
        //     </h4>
        //   </div>
        // )
    });
    setListTodo(removeList);
  };

  //   const updateTodoList = (index, names) => {
  //     console.log(index, names);
  //   };

  return (
    <div>
      <TodoForm onClick={handleAddTodo} />
      {listTodo.map((e) => (
        <TodoItems
          items={e}
          key={e}
          removeTodo={removeTodo}
          //   updateTodoList={updateTodoList}
        />
      ))}
      <ClearAllItem clearAllItem={deleteAllItems} />
    </div>
  );
}

export default TodoList;
