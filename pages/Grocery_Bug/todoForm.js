import React, { useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";

function TodoItems(props) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    
  }

  console.log(props.isUpdate);

  return (
    <div style={{ display: "flex", padding: "0 30px" }}>
      <Input
        type="text"
        value={value}
        placeholder="e.g. eggs"
        onChange={onChange}
      />

      <Button
        type="primary"
        onClick={() => {
          props.onClick(value);
          setValue("");
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default TodoItems;
