import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';


class App extends Component {

    // States use with care, available only in components

    state = {
        persons: [
            {id : '489df', name: 'Todd', age: 28},
            {id : '4sadf', name: 'Lisa', age: 29},
            {id : '4Io93', name: 'Susan', age: 26}
        ]
    }

    deletePersonHandler = (personIndex) => {
        // ** ALWAYS update state in an immutable way be working a copy then reassigning
        // const personsTmp = this.state.persons.slice();

        // Using ES6 - Spread creates a copy here, not only functionality
        const personsTmp = [...this.state.persons];
        personsTmp.splice(personIndex,1);
        this.setState({persons: personsTmp});


    }

    nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        // Prev ES6-  const personTmp = Object.assign({}, this.state.persons[personIndex]);
        // ES6
        const person = {
            ...this.state.persons[personIndex]
        };


        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons});

    }

    // Use arrow to avoid problems with this
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
        console.log(this.setState);

    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let Persons = null;

        if (this.state.showPersons) {
            Persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed ={(event) => this.nameChangedHandler(event,person.id)} />
                })}
            </div>
        );

        }

        return (
            <div className="App">
                <h1>Hi I am a React app</h1>
                <p>Hey It Works!!</p>
                <button
                    style={style}
                    onClick={ this.togglePersonsHandler}>Toggle Persons
                </button>
                {Persons}

                <UserInput/>
            </div>
        );

        //  Equivelent to the code above, even though it is cumberson, better to use above code, compiles to the code below
        //  return React.createElement('div',{className : 'App'},
        //  React.createElement('h1',null,'Does This Work Now!!'));

    }
}

export default App;
