import React from 'react'

export default function BtnAddWork({ handleCreate }) {
  return (
    <div className="top___todolist---submit">
        <button onClick={() => handleCreate()}>Create</button>
    </div>
  )
}
