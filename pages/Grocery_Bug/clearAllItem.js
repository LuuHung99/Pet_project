import React from "react";
import { Button } from "antd";

function ClearAllItem(props) {
  const { items } = props;
  return (
    <div>
      <div className="grocery_button">
        <Button type="primary" onClick={() => props.clearAllItem(items)}>
          Clear Items
        </Button>
      </div>
    </div>
  );
}

export default ClearAllItem;
