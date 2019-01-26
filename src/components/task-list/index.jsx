import React from 'react';

export default function TaskList({ completedCount, tasksLength }) {
    return <div>
       You have {completedCount} of {tasksLength} items completed on your to do list.
    </div>;
};