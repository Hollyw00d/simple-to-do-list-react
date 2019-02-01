import React, { Component } from 'react'

import DeleteBtn from './components/delete-btn'

import TaskListCompleted from './components/task-list-completed'

import TaskList from './components/task-list'

import TaskListForm from './components/task-list-form'

import TaskListTotal from './components/task-list-total'

class App extends Component {

  state = {
    tasks: [],
    taskName: '',
    nextId: 1,
    editing: false
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

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
  }

  taskCount = () => {
    //return this.state.tasks.length
    return 42
  }

  completedCount = () => {
    return this.state.tasks.filter(task => task.completed).length
  }

  deleteCompleted = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => !task.completed)
    }))
  }

  editTask = (id) => {
    // Gets task to edit
    const { tasks } = this.state
    const task = tasks.find(task => id === task.id)

    // This is used to show the input
    task.editing = true

    // Updates state
    this.setState({
      tasks
    })
  }

  handleChange = (e, id) => {
    const newTaskName = e.target.value

    // Gets task to edit
    const { tasks } = this.state
    const task = tasks.find(task => id === task.id)

    task.name = newTaskName
    
    if(e.which === 13) {
      task.editing = false
    }

    this.setState({
      tasks
    })
  }

  handleBlur = (e, id) => {
    const newTaskName = e.target.value

    // Gets task to edit
    const { tasks } = this.state
    const task = tasks.find(task => id === task.id)

    task.name = newTaskName

    task.editing = false

    this.setState({
      tasks
    })
  }

  render() {
    const { tasks, taskName } = this.state
    
    return (
      <div id="wrapper">
        <h1>Simple To Do List Using ReactJS</h1>

        <TaskListForm onFormSubmit={this.onFormSubmit} taskName={taskName} onFormChange={this.onChange} />

        <TaskList tasks={tasks} toggleCompleteTask={this.toggleComplete} editTask={this.editTask} handleChange={this.handleChange} handleBlur={this.handleBlur} />

        <TaskListTotal tasksLength={tasks.length} />

        <TaskListCompleted completedCount={this.completedCount()} tasksLength={tasks.length} />  

        <DeleteBtn completedCount={this.completedCount()} handleDelete={this.deleteCompleted} />
      </div>
    )
  }
}

export default App