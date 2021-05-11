import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import DetailReminder from './detailReminder';

const InitTodo = [
    {
        url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg", 
        name: "Bertie Yates", 
        old: "29 years"
    },
    {
        url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
        name: "Hester Hogan",
        old: "32 years" 
    },
    {
        url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        name: "Larry Little", 
        old: "36 years"
    },
    {
        url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg", 
        name: "Sean Walsh", 
        old: "34 years"   
    },
    {
        url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg", 
        name: "Lola Gardner", 
        old: "29 years"
    },
];

function TodoList() {

    // console.log(InitTodo);
    const [data, setData] = useState(InitTodo);
    const [index, setIndex] = useState(5);
  
    function DeleteAll (check) {
      console.log(check);
        const newList = data.filter(e=> {e.id !== check});
        setIndex(0);
        setData(newList);
        
    }
    
    return (
            <div className="reminder ">
                <div >
                    <div className="reminder__person" >
                            <h2>{index} birthdays today</h2>
                        <div className="reminder__block">
                            <div>
                                {
                                    data.map(e=> <DetailReminder item={e} key={e}/>)
                                }
                                <Button 
                                    style={{backgroundColor: ''}}
                                    type="primary" block 
                                    style={{width: '92%'}}
                                    onClick={() =>DeleteAll()}
                                >
                                    Clear All
                                </Button>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TodoList;