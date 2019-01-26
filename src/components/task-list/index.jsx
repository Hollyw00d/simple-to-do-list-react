import React from 'react'

export default function TaskList({ tasks, toggleCompleteTask }) {
    return <ul id="list">
    {
      tasks.map(task => {
        return <li key={task.id}>
          <input
            type="checkbox"
            value={task.completed}
            onClick={() => toggleCompleteTask(task.id)}
          />
          <span className={`${task.completed ? 'completed' : ''} read-item-title`}>{ task.name }</span>
        </li>
      })
    }
  </ul>
}