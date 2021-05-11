import classNames from 'classnames';
import * as _ from 'lodash'

const ListWork =  ({content, handChange, handleDelete}) => {
    return (
        <div>
            {
                _.map(content, (type, index) => {
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
                })
            }
        </div>
    )
} 

export default ListWork