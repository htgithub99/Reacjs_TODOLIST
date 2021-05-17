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
// nên tách ra component work item, mỗi component đảm bảo 1 chức năng/ 1 xử lý riêng biệt.
// không nên đặt index làm key, một số trường howpj kéo/thả phần tử sẽ làm sai lệch index của nó
// nên dùng id của phần tử làm key
// type có nghĩa là gì, nên đặt tên có ý nghĩa
// mình mới chia lại component, bạn hãy sửa lai các props(truyền props vào component cho đúng) để app chạy.