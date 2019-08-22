import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState = {}
    
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(el => newState[el.id] = el)
            return newState;

        case RECEIVE_TODO:
            let newTodo = {[action.todo.id]: action.todo}
            newState = Object.assign({}, state, newTodo);
            // debugger
            return newState;
            // newState[newTodo.id] = newTodo;
            // debugger
            // return newState;
       
            // let newTodo = { [action.todo.id]: action.todo };
            // return Object.assign({}, state, newTodo);
        default:
            return state;
    }
};

export default todosReducer;