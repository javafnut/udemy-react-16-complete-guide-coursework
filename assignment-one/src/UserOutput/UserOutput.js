import React from 'react';
import './UserOutput.css';


const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> UserName: {props.userName}</p>
            <p>Should Overwrite this one</p>
        </div>
    )
}

export default UserOutput;


// import React from 'react';
//
// import './UserOutput.css';
//
// const userOutput = (props) => {
//     return (
//         <div className="UserOutput">
//             <p>Username: {props.userName}</p>
//             <p>I hope I'll be overwritten!</p>
//         </div>
//     );
// };
//
// export default userOutput;

