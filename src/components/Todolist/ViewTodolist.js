import * as _ from 'lodash'
import React, { useState, useEffect } from 'react';
import FormAddWork from './FormAddWork';
import ListWork from './ListWork';
import callApi from '../../api/admin/callApi';

export default function ViewTodolist({match}) {
    // eslint-disable-next-line
    // const [memorize, setMemorize] = useState('')
    const [todos, setTodos] = useState()

    /*Hàm này được chạy khi có sự thay đổi ví dụ như delete, create, update item => componentDidUpdate */
    useEffect(() => {
        console.log('useEffect has been called!');
        const getApi = async () => {
            try {
                const getawait = await callApi.get()
                setTodos(getawait.data)
            }
            catch {
                console.log('get fail')
            }
        }
        getApi()
    }, []); 
    
    const handleCreate = (todo) => {
        const items = {
            name: todo,
            status: 'new'
        }
        const adds = async () => {
            try {
                await callApi.create(items)
                const addsawait = await callApi.get({})
                setTodos(addsawait.data)
            }
            catch {
                console.log('Create faild');
            }
        }
        adds()
    }

    const handleDelete = (e) => {
        const idList = e.id
        const deletes = async () => {
            try {
                await callApi.deletes(idList)
                const deletesawait = await callApi.get({})
                setTodos(deletesawait.data)
            }
            catch {
                console.log('delete faild');
            }
        }

        deletes ()
    }

    const handChange = (e, items) => {
        setTodos(_.map(todos, (i, index) => i = _.assign(i, { did: items.id === i.id ? e.checked : i.did })))
    }

    return (
        <div match={match}>
            <div className="todolist">
                <div style={{textAlign: 'center'}}> To do List </div>
                <div className="top___todolist">
                    {/* form add work item */}
                    <FormAddWork handleCreate={handleCreate} />
                </div>
                {/* list work item */}
                <ListWork todos={todos} handleDelete={handleDelete} handChange={handChange}/>
            </div>
        </div>
    )
}