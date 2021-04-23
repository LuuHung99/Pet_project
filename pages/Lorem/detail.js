import React from 'react';

function DetailLorem(props) {
    const {items} = props;
    return (
        <div style={{paddingTop: '60px', }}>
            {items.text}
        </div>
    );
}

export default DetailLorem;