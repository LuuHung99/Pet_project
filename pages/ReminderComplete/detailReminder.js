import React from 'react';

function detailReminder(props) {
    return (
        <div>
            <div className="person" >
                <img className="img" src={props.url} alt=""/>
                <div className="person__name">
                    <h4>{props.name}</h4>
                    <p>{props.old}</p>
                </div>
            </div>
        </div>
    );
}

export default detailReminder;