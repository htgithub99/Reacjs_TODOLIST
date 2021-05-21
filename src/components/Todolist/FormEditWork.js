import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'

export default function FormEditWork ({todoStatus, handleUpdatStatus}) {
    const [check, setCheck ] = useState(false)

    useEffect(() => {
        todoStatus ? setCheck(todoStatus?.is) : setCheck('')
      }, [todoStatus])

    const STATUS_TODO = [
        {
            status: 'done', value: 1
        },
        {
            status: 'new', value: 2
        },
        {
            status: 'doing', value: 3
        },
        {
            status: 'pedding', value: 4
        }
    ]

    const handleStatus = (item) => {
        const allItem = {
            name: todoStatus.items?.name,
            status: item
        }
        handleUpdatStatus(allItem, todoStatus.items?.id)
    }
    return (
        <>
            <div style={{display: check ? 'block' : 'none', backgroundColor: '#ffffff', 
            padding: '30px', 
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)', 
            borderRadius: '6px',
            position: 'fixed',
            top: '70px',
            width: '435px'

            }}>
                <h4 style={{textAlign: 'center'}}>Thay đổi status</h4>
                <select defaultValue={3} onChange={(event) => handleStatus(event.target.value)} placeholder="Select semester" className="w-100 select_open">
                {
                    _.map(STATUS_TODO, i => {
                        return (
                            <option key={i.value} value={i.status}>{i.status}</option>
                        )
                    })
                }
                </select>

                <button onClick={(() => {setCheck(false); handleUpdatStatus()})} className="submit_end mt-3">Cập nhật</button>
            </div>
        </>
    )
}