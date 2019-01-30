import React from 'react'

export default function TaskListNumber({ completedCount, tasksLength }) {
    return <div>
        <p>
            You have {completedCount} of {tasksLength} items completed on your to do list.
       </p>
    </div>
}