import React from 'react'

export default function BtnAddWork({ handleCreate }) {
  return (
    <div className="top___todolist---submit">
        <button onClick={(event) => handleCreate(event)}>Create</button>
    </div>
  )
}
