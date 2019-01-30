import React from 'react'

export default function TaskList({ tasks, toggleCompleteTask, editTask, handleChange }) {
    return <ul id="list">
    {
      tasks.map(task => {
        return <li key={task.id}>
          {/* Checkbox */}
          <input
            type="checkbox"
            value={task.completed}
            onClick={() => toggleCompleteTask(task.id)}
          />

          {/* Task */}
          {!task.editing && 
            <span className={`${task.completed ? 'completed ' : ''}read-item-title`} onClick={() => { editTask(task.id); }}>{ task.name }</span>}
          
          {/* Change input */}
          {task.editing && <input
            type="text"
            onKeyPress={(e) => handleChange(e, task.id)}
            defaultValue={task.name}
            className="edit-item"
          />}
        </li>
      })
    }
  </ul>
}