import ViewTodolist from './components/Todolist/ViewTodolist'

export const routes = [
    {
        path: '/admin/list',
        exact: true,
        components: match => <ViewTodolist match={match} />
    }
]