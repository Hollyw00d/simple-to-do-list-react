import React from 'react'

export default function DeleteBtn({ completedCount, handleDelete }) {
    return <div>
            {
            completedCount > 0
                ?    
                    
                    <p>
                        <button onClick={handleDelete}>
                            Delete completed ({completedCount}) tasks</button>
                    </p>
                : null
            }
        </div>
}