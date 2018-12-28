import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <input type="button" value={ this.props.buttonValue } onClick={ this.props.deleteHandler} />
      </li>
    );
  }
}

export default ToDo;
