import React from 'react'

export default function DeleteBtn({ completedCount, handleDelete }) {
    return <div>
        {
        completedCount > 0
            ? <button
                onClick={handleDelete}
            >Delete completed ({completedCount}) tasks</button>
            : null
        }
    </div>
}