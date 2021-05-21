import React from 'react'
import classNames from 'classnames';

export default function WorkItem({items, handChange, handleDelete, handChangeStatus}) {
  // eslint-disable-next-line
  
  return (
    <>
      <div className={classNames('todolist___work', { bg__todolist: items.did })} key={items.id}>
        <ul>
            <li onClick={() => handChange(items)} >
              {items.name}
            </li>
        </ul>
        <div className="todolist___work---button">
            <span onClick={() => handChangeStatus(items)} style={{margin: '0 10px 0', cursor: 'pointer', color: '#fff', padding: '3px 15px', borderRadius: '6px', fontSize: '16px'}} 
              className={ classNames({bg__status_new: items.status === 'new', 
              bg__status_done: items.status === 'done',
              bg__status_doing: items.status === 'doing',
              bg__status_pedding: items.status === 'pedding',
            })}>
              {items.status}
            </span>
            <input type="checkbox" style={{padding: '0 0 0 18px'}}></input>
            <button onClick={() => handleDelete(items)} style={{color: 'red'}}>Xóa</button>
        </div>
      </div>
    </>
  )
}
