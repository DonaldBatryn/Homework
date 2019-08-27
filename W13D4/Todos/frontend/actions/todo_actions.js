import * as APIUtil from '../util/todo_api_util'
import { receiveErrors, clearErrors } from './error_actions'


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos 
})

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
})

export const fetchTodos = () => (dispatch) => (
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
)

export const createTodo = (todo) => (dispatch) => (
    APIUtil.createTodo(todo)
        .then(
            todo => dispatch(receiveTodo(todo)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
);

window.createTodo = createTodo;
window.fetchTodos = fetchTodos;
window.receiveTodo = receiveTodo; // REMOVE ME
window.receiveTodos = receiveTodos; // REMOVE ME

