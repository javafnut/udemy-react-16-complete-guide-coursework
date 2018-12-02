import React from 'react';
import './Person.css';


// use const instead of var an lowercase p for Person
// const person = () => {
//     return <p>I'm a Person and I am {(Math.floor(Math.random() * 30))}!</p>
// }

const person = (props) => {
    return (
              <div className="Person">
                  <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
                  <p>{props.children}</p>
                  Name : <input type="text" onChange={props.changed} value={props.name}/>
              </div>
            )
}

export default person;