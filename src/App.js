import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    let todoItems = [];

    this.state = {
      todoItems
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // let todoItemsArr = [this.state.todoItems];

    this.setState({
      todoItems: new Array(this.state.todoItems)
    });

    console.log(this.state.todoItems);

  }

  onChange(event) {
    this.setState({
      todoItems: event.target.value
    })
  }

  render() {
    return (
      <div id="wrapper">
        <h1>Simple To Do List Using ReactJS</h1>

        <form onSubmit={this.onFormSubmit}>
          <p>
            <label htmlFor="todoItem">To Do Item</label><br />
            <input id="todo-item" name="todoItem" value={this.state.todoItems || ''} onChange={this.onChange} type="text" required minLength="2" maxLength="30" />
          </p>
          <p>
            <input type="submit" value="Add" />
          </p>
        </form>
      </div>
    );
  }
}

export default App;