import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoItems from "./todoItems";
import ClearAllItem from "./clearAllItem";
import { v4 as uuidv4 } from 'uuid'

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
    const newList = listTodo.filter((e) => {});
    setListTodo(newList);
  };

  const handleAddTodo = (val) => {
    console.log(val);
    if(val.length > 0) {
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
