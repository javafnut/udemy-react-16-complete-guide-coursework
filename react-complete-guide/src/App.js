import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';



class App extends Component {

  // States use with care, available only in components

    state = {
       persons: [
        {name: 'Todd', age:28},
        {name: 'Lisa', age:29},
        {name: 'Susan', age:26}
       ]



  }

  switchNameHandler = (newName) =>{
     console.log('Was Clicked');
     // Don't do this this.state.persons[o].name = 'dave'
     this.setState({
         persons: [
             {name: 'Todd', age: 23},
             {name:  'Lisa', age: 29},
             {name: newName, age: 36}
         ]
     })
 }

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Todd', age: 23},
              {name:  'Lisa', age: 29},
              {name: event.target.value, age: 36}
          ]
      })
    }

  render() {
    const style ={
        backgroundColor : 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
         <h1>Hi I am a React app</h1>
          <p>Hey It Works!!</p>
           <button
               style={style}
               onClick={() => this.switchNameHandler('David')}>Switch Name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            // using Bind approach
            click={this.switchNameHandler.bind(this,'Valerie')}
            changed={this.nameChangedHandler}>My Hobbies: Cooking
        </Person>
        <UserInput/>

      </div>
    );

    //  Equivelent to the code above, even though it is cumberson, better to use above code, compiles to the code below
    //   return React.createElement('div',{className : 'App'},
    //          React.createElement('h1',null,'Does This Work Now!!'));

  }
}

export default App;
