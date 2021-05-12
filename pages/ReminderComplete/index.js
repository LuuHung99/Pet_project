import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import DetailReminder from "./detailReminder";

const InitTodo = [
  {
    id: 1,
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Bertie Yates",
    old: "29 years",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    name: "Hester Hogan",
    old: "32 years",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Larry Little",
    old: "36 years",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Sean Walsh",
    old: "34 years",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Lola Gardner",
    old: "29 years",
  },
];

function TodoList() {
  const [data, setData] = useState(InitTodo);

  return (
    <div className="reminder ">
      <div>
        <div className="reminder__person">
          <h2>{data.length} birthdays today</h2>
          <div className="reminder__block">
            <DetailReminder people={data} />
            <Button
              style={{ backgroundColor: "" }}
              type="primary"
              block
              style={{ width: "92%" }}
              onClick={() => setData([])}
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
