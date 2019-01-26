import React from 'react'

export default function TaskList({ onFormSubmit, taskName, onFormChange }) {
    return <div>
        <form onSubmit={onFormSubmit}>
        <p>
            <label htmlFor="todoItem">To Do Item</label><br />
            <input id="todo-item"
            name="taskName"
            value={taskName}
            onChange={onFormChange}
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
}