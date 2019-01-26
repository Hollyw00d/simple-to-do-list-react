import React from 'react';

export default function TaskListNumber({ completedCount, tasksLength }) {
    return <div>
       You have {completedCount} of {tasksLength} items completed on your to do list.
    </div>;
};