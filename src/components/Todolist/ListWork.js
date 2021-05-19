import * as _ from 'lodash'
import WorkItem from './WorkItem';

const ListWork =  ({todos, handChange, handleDelete}) => {
    return (
        <div>
            {
                _.map(todos, (items, index) => {
                    return (
                        <WorkItem key={items.id} items={items} handleDelete={handleDelete} handChange={handChange}/>
                    )
                })
            }
        </div>
    )
} 

export default ListWork
// nên tách ra component work item, mỗi component đảm bảo 1 chức năng/ 1 xử lý riêng biệt.(done)
// không nên đặt index làm key, một số trường howpj kéo/thả phần tử sẽ làm sai lệch index của nó(done)
// nên dùng id của phần tử làm key(done)
// type có nghĩa là gì, nên đặt tên có ý nghĩa(done)
// mình mới chia lại component, bạn hãy sửa lai các props(truyền props vào component cho đúng) để app chạy.(done)