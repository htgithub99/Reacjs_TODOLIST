import * as _ from 'lodash'
import React, { useState, useEffect } from 'react';
import BtnAddWork from './BtnAddWork';
import FormAddWork from './FormAddWork';
import ListWork from './ListWork';
import { SET_DATA_LOCAL_STORAGE, GET_DATA_LOCAL_STORAGE } from './const'


export default function ViewTodolist({match}) {
    let DATA_LIST = 'DATA_LIST'
    // let LIST_TODO = [
    //     {
    //         id: 1,
    //         name: 'Angular',
    //         did: false
    //     },
    //     {
    //         id: 2,
    //         name: 'Nodejs',
    //         did: false
    //     },
    //     {
    //         id: 3,
    //         name: 'Reacjs',
    //         did: false
    //     }
    // ]
    let LIST_TODO = GET_DATA_LOCAL_STORAGE(DATA_LIST)
    const [memorize, setMemorize] = useState('')
    const [content, setContent] = useState(LIST_TODO)
    
    const handleCreate = () => {
        const asc = LIST_TODO[LIST_TODO.length - 1] ? LIST_TODO[LIST_TODO.length - 1].id + 1 : 1
        const items = {
            id: asc,
            name: memorize,
            did: false
        }
        setContent([...content, items])
    }

    const handleDelete = (event) => {
        const idList = event.id
        setContent(_.filter(content, (i, index) => i.id !== idList))
    }

    const handChange = (event, items) => {
        setContent(_.map(content, (i, index) => i = _.assign(i, { did: items.id === i.id ? event.checked : i.did })))
    }

    /*Hàm này được chạy khi có sự thay đổi ví dụ như delete, create, update item => componentDidUpdate */
    useEffect(() => {
        console.log('useEffect has been called!');
        SET_DATA_LOCAL_STORAGE(content)
    }, [content]); 

    return (
        <div match={match}>
            <div className="todolist">
                <div style={{textAlign: 'center'}}> To do List </div>
                <div className="top___todolist">
                    {/* form add work item */}
                    <FormAddWork setMemorize={setMemorize}/>
                     {/* tạo componet button create work item*/}
                    <BtnAddWork handleCreate={handleCreate}/>
                </div>
                {/* list work item */}
                <ListWork content={content} handleDelete={handleDelete} handChange={handChange}/>
            </div>
        </div>
    )
}