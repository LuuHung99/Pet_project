import React, {useState} from 'react';
import TodoForm from './todoForm';
import TodoItems from './todoItems';
import ClearAllItem from './clearAllItem';


const listItems = [
    {
        id: 1, 
        name: 'hello',
        
    },

    {
        id: 2,
        name: 'world'
    },
    
    {
        id: 3,
        name: 'dog'
    }

];

function TodoList(props) {
    const [listTodo, setListTodo] = useState(listItems);
    const [showList, setShowList] = useState('');

    const deleteAllItems = () => {
        const newList = listTodo.filter(e=> {});
        setListTodo(newList);
    }

    const addTodo = (idx, names) => {
        console.log({id: 1, names: 'hung'});

        // const newTodo = listTodo.push({id: idx, name: names})
        // setListTodo(newTodo);
        // setShowList('');
    }

    const removeTodo = (selected) => {
        const removeList = listTodo.filter((e) => {
            if(e.id !== selected)
                return e;
        })
        setListTodo(removeList);
    }

    const updateTodoList = (index,names) => {
        console.log(index,names);
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            {listTodo.map((e) => {
                if(e.id !== showList)
                    return <TodoItems items={e} key={e} removeTodo={removeTodo} updateTodoList={updateTodoList} />
            })}
            <ClearAllItem deleteAllItems={deleteAllItems} />
        </div>
    );
}

export default TodoList;