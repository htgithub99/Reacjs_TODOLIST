import React from 'react'

export default function FormAddWork({setMemorize}) {
  return (
    <div className="top___todolist---input">
      <input onChange={(event) => setMemorize(event.target.value)}/>
    </div>
  )
}
