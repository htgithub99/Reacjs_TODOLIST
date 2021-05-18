import React from 'react'
import classNames from 'classnames';

export default function WorkItem({items, handChange, handleDelete, index}) {
  return (
    <div className={classNames('todolist___work', { bg__todolist: items.did })} key={index}>
      <ul>
          <li>{items.name}</li>
      </ul>
      <div className="todolist___work---button">
          <input type="checkbox" onClick={($event) => handChange($event.target, items)} style={{padding: '0 0 0 18px'}}></input>
          <button onClick={() => handleDelete(items)} style={{color: 'red'}}>Xóa</button>
      </div>
    </div>
  )
}
