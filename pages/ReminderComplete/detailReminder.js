import React from 'react';

function detailReminder(props) {
    const {item} = props

    return (
        <div>
            <div className="person" >
                <div className="person_img">
                    <img className="img" src={item.url} alt=""/>
                </div>
                <div className="person__name">
                    <h4><b>{item.name}</b></h4>
                    <p>{item.old}</p>
                </div>
            </div>
        </div>
    );
}

export default detailReminder;