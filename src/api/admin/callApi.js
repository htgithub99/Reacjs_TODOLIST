import http from '../httpRequest'

const get = () => http.get('/todo')

const create = (data) => http.post('/todo', data)

const deletes = (id) => http.delete(`/todo/${id}`)

// eslint-disable-next-line
export default {
    get,
    create,
    deletes
}