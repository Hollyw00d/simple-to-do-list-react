import React from 'react'

export default function TaskListTotal({ tasksLength }) {
    return <div>
        {tasksLength ? <p><strong>Click on an item to edit it.</strong></p> : null }
    </div>
}