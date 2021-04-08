import React from 'react';

function detailReminder(props) {
    const {item} = props
    // console.log(props);

    return (
        <div>
            <div className="person" >
                <img className="img" src={item.url} alt=""/>
                <div className="person__name">
                    <h4>{item.name}</h4>
                    <p>{item.old}</p>
                </div>
            </div>
        </div>
    );
}

export default detailReminder;