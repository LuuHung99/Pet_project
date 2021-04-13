import React, {useState} from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

function TodoItems(props) {

    const  [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValue('');
        props.onSubmit();
    }

    return (
                <form className="grocery_input" onSubmit={onSubmit} onChange={onChange} >
                    <Space direction="vertical">
                        <Search
                            placeholder="e.g. eggs"
                            allowClear
                            enterButton="Submit"
                            size="large"
                            value={value}
                            
                        />
                    </Space>
                    
                </form>

    );
}

export default TodoItems;