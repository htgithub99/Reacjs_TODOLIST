import * as _ from 'lodash'
import React, { useState, useEffect } from 'react';
import BtnAddWork from './BtnAddWork';
import FormAddWork from './FormAddWork';
import ListWork from './ListWork';
import callApi from '../../api/admin/callApi';

export default function ViewTodolist({match}) {
    
    const [memorize, setMemorize] = useState('')
    const [content, setContent] = useState()

    /*Hàm này được chạy khi có sự thay đổi ví dụ như delete, create, update item => componentDidUpdate */
    useEffect(() => {
        console.log('useEffect has been called!');
        const getApi = async () => {
            try {
                const getawait = await callApi.get()
                setContent(getawait.data)
            }
            catch {
                console.log('get fail')
            }
        }

        getApi()
    }, []); 
    const handleCreate = () => {
        const asc = content[content.length - 1] ? content[content.length - 1].id + 1 : 1
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