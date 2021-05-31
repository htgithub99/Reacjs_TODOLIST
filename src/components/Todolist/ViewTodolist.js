// import * as _ from 'lodash'
import React, { useState, useEffect } from 'react';
import * as _ from 'lodash'
import FormAddWork from './FormAddWork';
import ListWork from './ListWork';
import FormEditWork from './FormEditWork'
import callApi from '../../api/admin/callApi';

export default function ViewTodolist({match}) {
    // eslint-disable-next-line
    const [todos, setTodos] = useState()
    const [todoStatus, setTodoStatus] = useState(
        {
            is: false,
            items: ''
        }
    )
    const [todoEdit, setTodoEdit] = useState({
        is: false,
        items: ''
    })

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
    
    const handleAllFunction = (todo, id) => {
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

        const updates = async () => {
            try {
                await callApi.update(items, id)
                const updatesawait = await callApi.get({})
                setTodos(updatesawait.data)
            }
            catch {
                console.log('Create faild');
            }
        }
        if (id !== undefined) {
            updates()
            setTodoEdit('')
        } else
            adds()
    }

    const handleUpdatStatus = (todo, id) => {
        const updateStatus = async () => {
            try {
                await callApi.update(todo, id)
                const statussawait = await callApi.get({})
                setTodos(statussawait.data)
            }
            catch {
                console.log('Create faild');
            }
        }

        updateStatus()
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

    const handleChange = (item) => {
        setTodoEdit({
            is: true,
            items: item
        })
    }

    const handleChangeStatus = (item) => {
        setTodoStatus({
            is: true,
            items: item
        })
    }

    const handleAllChecked = (e, items) => {
        setTodos(_.map(todos, i => i = _.assign(i, { selected: i.id === items.id ? e : i.selected })))
    }

    const handleDeleteAll = () => {
        const idDelete = []
        _.map(todos, i => {
            if (i.selected === true ) {
                idDelete.push(i.id)
            }
        })
        ;(async function deletes() {
            try {
                const deletePromise = new Promise((results, erros) => _.map(idDelete, (i) => results(callApi.deletes(i))))
                await deletePromise
                const deletesawait = await callApi.get({})
                setTodos(deletesawait.data)
            }
            catch {
                console.log('delete faild');
            }
        })()
    }

    return (
        <div match={match}>
            <div className="todolist">
                <div style={{textAlign: 'center'}}> To do List </div>
                <div className="top___todolist">
                    {/* form add work item */}
                    <FormAddWork todoEdit={todoEdit} handleAllFunction={handleAllFunction} handleChange={handleChange}/>
                </div>
                {/* list work item */}
                <FormEditWork todoStatus={todoStatus} handleUpdatStatus={handleUpdatStatus}/>
                <ListWork todos={todos} handleDeleteAll={handleDeleteAll} handleDelete={handleDelete} handleChangeStatus={handleChangeStatus} handleChange={handleChange} handleAllChecked={handleAllChecked}/>
            </div>
        </div>
    )
}