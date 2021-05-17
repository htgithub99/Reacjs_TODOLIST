import React from 'react'

export default function WorkItem() {
  return (
    <div className={classNames('todolist___work', { bg__todolist: type.did })} key={index}>
      <ul>
          <li>{type.name}</li>
      </ul>
      <div className="todolist___work---button">
          <input type="checkbox" onClick={($event) => handChange($event.target, type)} style={{padding: '0 0 0 18px'}}></input>
          <button onClick={() => handleDelete(index)} style={{color: 'red'}}>Xóa</button>
      </div>
    </div>
  )
}
