import React, { useState, useEffect,  useRef } from "react";
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import ClearAllItem from "./clearAllItem";
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    console.log('we are running on the client')
    let listTodo = localStorage.getItem("listTodo");

    if (listTodo) {
      return (listTodo = JSON.parse(localStorage.getItem("listTodo")));
    } else {
      return [];
    }
  }
  else {
    console.log('we are running on the server');
}
};

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
  const [message, setMessage] = useState("");

  const intervalRef = useRef(null);

  // if (typeof window !== "undefined") {
  //   localStorage.setItem(storages, JSON.stringify(todoList));
  // }

  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);

  const deleteAllItems = () => {
    const newList = listTodo.filter((e) => {});
    setListTodo(newList);
  };

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setMessage("delete All Items...");
    },2000);
    return () => {
      clearInterval(intervalRef);
    }
  },[])

  const handleAddTodo = (val) => {
    console.log(val);
    if (val.length > 0) {
      const newTodo = {
        id: uuidv4(),
        title: val,
      };

      const newTodoList = listTodo.concat(newTodo);
      // console.log(newTodoList);
      setListTodo(newTodoList);
    }
  };

  const removeTodo = (selected) => {
    const removeList = listTodo.filter((e) => {
      if (e.id !== selected) return e;
    });
    setListTodo(removeList);
  };

  const updateTodoList = (id, val) => {
    setEdit({
      id: id,
      val: val,
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0px", color: "red" }}>
        {message}
      </div>
      <TodoForm onClick={handleAddTodo} isUpdate={edit} />
      {listTodo.length > 0 && (
        <TodoItems
          todoList={listTodo}
          removeTodo={removeTodo}
          updateTodoList={updateTodoList}
        />
      )}

      <ClearAllItem clearAllItem={deleteAllItems} />
    </div>
  );
}

export default TodoList;
