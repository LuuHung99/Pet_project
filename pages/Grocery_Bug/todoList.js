import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import ClearAllItem from "./clearAllItem";


const listItems = [
  {
    id: 1,
    title: "hello",
  },

  {
    id: 2,
    title: "world",
  },

  {
    id: 3,
    title: "dog",
  },
];

function TodoList(props) {
  const [listTodo, setListTodo] = useState(listItems);
  const [edit, setEdit] = useState(true);

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
      title: val,
    };

    const newTodoList = listTodo.concat(newTodo);
    // console.log(newTodoList);
    setListTodo(newTodoList);
  };

  const removeTodo = (selected) => {
    const removeList = listTodo.filter((e) => {
      if (e.id !== selected) return e;
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

  const updateTodoList = (id, val) => {
    setEdit({
      id: id,
      val: val
    });
  };

  return (
    <div>
      <TodoForm onClick={handleAddTodo} isUpdate={edit}/>
      {listTodo.map((e) => (
        <TodoItems
          items={e}
          key={e.id}
          removeTodo={removeTodo}
          updateTodoList={updateTodoList}
        />
      ))}
      <ClearAllItem clearAllItem={deleteAllItems} />
    </div>
  );
}

export default TodoList;
