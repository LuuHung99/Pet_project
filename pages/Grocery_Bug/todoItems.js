import React from 'react';
import 'antd/dist/antd.css';
import { DeleteTwoTone,EditTwoTone } from '@ant-design/icons';

function TodoItems(props) {
    const {items} = props;

    
    return (
        <div className="grocery_items">
                <div className="grocery_text">
                    <h3>{items.name}</h3>
                </div>
                <div className="grocery_icons">
                    <EditTwoTone  onClick={()=> props.updateTodoList(items.id, items.name)} />
                    <DeleteTwoTone onClick={()=> props.removeTodo(items.id)}/>
                </div>
        </div>
    );
}

export default TodoItems;