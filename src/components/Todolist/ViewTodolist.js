import * as _ from 'lodash'
import React, { useState, useEffect } from 'react';
import BtnAddWork from './BtnAddWork';
import FormAddWork from './FormAddWork';
import ListWork from './ListWork';
import callApi from '../../api/admin/callApi';

export default function ViewTodolist({match}) {
    // eslint-disable-next-line
    // const [memorize, setMemorize] = useState('')
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
    
    const handleCreate = (e) => {
        console.log('parent', e);
        // const memorize = e.target.value
        const items = {
            name: e,
            status: 'new'
        }
        const adds = async () => {
            try {
                await callApi.create(items)
                const addsawait = await callApi.get({})
                setContent(addsawait.data)
            }
            catch {
                console.log('Create faild');
            }
        }
        adds()
        // if(event.key === 'Enter' || event.type === 'click')
        //     if (memorize !== '')
    }

    const handleDelete = (event) => {
        const idList = event.id
        const deletes = async () => {
            try {
                await callApi.deletes(idList)
                const deletesawait = await callApi.get({})
                setContent(deletesawait.data)
            }
            catch {
                console.log('delete faild');
            }
        }

        deletes ()
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
                    <FormAddWork handleCreate={handleCreate} />
                     {/* tạo componet button create work item*/}
                    <BtnAddWork handleCreate={handleCreate}/>
                </div>
                {/* list work item */}
                <ListWork content={content} handleDelete={handleDelete} handChange={handChange}/>
            </div>
        </div>
    )
}