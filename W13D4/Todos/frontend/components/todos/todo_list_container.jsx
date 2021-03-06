import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos, receiveTodo, createTodo } from '../../actions/todo_actions'



const mapStateToProps = (state) => {
   
    return {
    todos: allTodos(state),
    errors: state.errors
    }
}

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    fetchTodos: dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

