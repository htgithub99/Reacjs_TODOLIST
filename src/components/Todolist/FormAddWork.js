import React from 'react'

export default function FormAddWork({setMemorize, handleCreate}) {
  return (
    <div className="top___todolist---input">
      <input onKeyPress={(event) => handleCreate(event)} onChange={(event) => setMemorize(event.target.value)}/>
    </div>
  )
}
