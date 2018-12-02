import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid green'
    };

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;

}

export default UserInput;






