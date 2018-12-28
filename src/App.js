import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true, buttonValue: 'Delete' },
        { description: 'Throw the dishes away', isCompleted: false, buttonValue: 'Delete' },
        { description: 'Buy new dishes', isCompleted: false, buttonValue: 'Delete' }
      ],
      newTodoDescription: ''
    };
  }


  deleteHandler(index){
    //THIS IS THE SLICE AND FILTER METHOD
    const todos = this.state.todos.slice();
    const todo = todos.filter(function(x, ind) {
    return ind !==index;
    });
    this.setState ({ todos: todo});
  }

/*
  deleteHandler(todos){
  //THIS IS THE SPLICE METHOD. THIS IS BAD> THIS IS A MUTABLE METHOD
    /*  let index = this.state.todos.indexOf(todos);
      this.state.todos.splice(index, 1);
      this.setState(this.state.todos);
  }
  */



  handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

  handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newTodoDescription) { return }
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false, buttonValue: 'Delete' };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
}


  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }


  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } buttonValue={ todo.buttonValue } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteHandler={ () => this.deleteHandler(index) } />
         )}
       </ul>
       <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
        <input type="submit" />
       </form>
     </div>
   );
 }
}

export default App;
