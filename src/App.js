import React, { Component } from 'react';

import DeleteBtn from './components/delete-btn'

class App extends Component {

  state = {
    tasks: [],
    taskName: '',
    nextId: 1
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onFormSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          name: this.state.taskName,
          completed: false,
          id: prevState.nextId
        }
      ]
    }), () => {
      // this fire when the setState completes, because setState is async
      this.setState(prevState => ({
        taskName: '',
        nextId: prevState.nextId+1
      }))
    })
  }

  
  toggleComplete = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        return (task.id === id)
          ? ({
            ...task,
            completed: !task.completed
          })
          : task
      })
    }))
  };

  completedCount = () => {
    return this.state.tasks.filter(task => task.completed).length
  };

  deleteCompleted = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => !task.completed)
    }))
  };

  render() {
    const { tasks, taskName } = this.state
    return (
      <div id="wrapper">
        <h1>Simple To Do List Using ReactJS</h1>

        <div>
          <form onSubmit={this.onFormSubmit}>
            <p>
              <label htmlFor="todoItem">To Do Item</label><br />
              <input id="todo-item"
                name="taskName"
                value={taskName}
                onChange={this.onChange}
                type="text" 
                required
                minLength="2"
                maxLength="30"
              />
            </p>
            <p>
              <input type="submit" value="Add" />
            </p>
          </form>
        </div>

        <ul id="list">
          {
            tasks.map(task => {
              return <li key={task.id}>
                <input
                  type="checkbox"
                  value={task.completed}
                  onClick={() => this.toggleComplete(task.id)}
                />
                <span className={`${task.completed ? 'completed' : ''} read-item-title`}>{ task.name }</span>
              </li>
            })
          }
        </ul>

        <div>
          You have {this.completedCount()} of {tasks.length} items completed on your to do list.
        </div>

        <DeleteBtn completedCount={this.completedCount()} handleDelete={this.deleteCompleted} />
      </div>
    );
  };
}

export default App;