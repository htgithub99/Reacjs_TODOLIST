import * as _ from 'lodash'
import React, {useState} from 'react';
import ListWork from './ListWork';


export default function ViewTodolist({match}) {
    let LIST_TODO = [
        {
            id: 1,
            name: 'Angular',
            did: false
        },
        {
            id: 2,
            name: 'Nodejs',
            did: false
        },
        {
            id: 3,
            name: 'Reacjs',
            did: false
        }
    ]

    const [memorize, setMemorize] = useState(null)
    const [content, setContent] = useState(LIST_TODO)
    
    const handleCreate = () => {
        const items = {
            id: LIST_TODO.length + 1,
            name: memorize,
            did: false
        }
        setContent([...content, items])
    }
    const handleDelete = (event) => {
        setContent(_.filter(content, (i, index) => index !== event))
    }

    const handChange = (event, type) => {
        setContent(_.map(content, (i, index) => i = _.assign(i, { did: type.id === i.id ? event.checked : i.did })))
        console.log('content', content);
    }
    return (
        <div match={match}>
            <div className="todolist">
                <div style={{textAlign: 'center'}}> To do List </div>
                <div className="top___todolist">
                    <div className="top___todolist---input">
                        <input onChange={(event) => setMemorize(event.target.value)}/>
                    </div>
                    <div className="top___todolist---submit">
                        <button onClick={() => handleCreate()}>Create</button>
                    </div>
                </div>
                <ListWork content={content} handleDelete={handleDelete} handChange={handChange}/>
            </div>
        </div>
    )
}