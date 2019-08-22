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



window.receiveTodo = receiveTodo; // REMOVE ME
window.receiveTodos = receiveTodos; // REMOVE ME

