import React from 'react'

export default function FormAddWork({handleCreate}) {
  return (
    <div className="top___todolist---input">
      <input onKeyPress={(event) => handleCreate(event)} />
    </div>
  )
}

// onChange={(event) => setMemorize(event.target.value)}
