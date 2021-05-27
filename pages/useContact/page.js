import React, {useContext} from 'react';
import { UseContact } from './useContact';

function PageComponent(props) {
    const {user} = useContext(UseContact);
 
    return (
        <div>
            <h3>Page</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
    
        </div>
    );
}

export default PageComponent;