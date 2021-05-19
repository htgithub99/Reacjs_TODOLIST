import React, { useState } from 'react'

export default function FormAddWork({handleCreate}) {
  const [memorize, setMemorize] = useState('')

  const handelCreateChild = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      handleCreate(memorize);
      setMemorize('');
    } else {
      setMemorize(e.target.value)
    }
  }
  return (
    <div className="top___todolist---input">
      <input type="text" onChange={(e) => handelCreateChild(e)} value={memorize} />
    </div>
  )
}
