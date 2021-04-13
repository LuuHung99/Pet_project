import React from 'react';
// import TodoForm from './todoForm';
import TodoList from './todoList';
// import ClearAllItem from './clearAllItem';


function Grocery_Bug(props) {

    return (
            <div className="grocery_container">
                <div className="grocery_title">
                    <h1>Grocery Bug</h1>
                </div>
                {/* <TodoForm /> */}
                <TodoList />
                {/* <ClearAllItem /> */}
            </div>
    );
}

export default Grocery_Bug;