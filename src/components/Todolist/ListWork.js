import classNames from 'classnames';
import * as _ from 'lodash'
import WorkItem from './WorkItem';

const ListWork =  ({content, handChange, handleDelete}) => {
    return (
        <div>
            {
                _.map(content, (type, index) => {
                    return (
                        <WorkItem />
                    )
                })
            }
        </div>
    )
} 

export default ListWork
