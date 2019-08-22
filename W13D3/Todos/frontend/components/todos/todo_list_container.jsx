import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
})

export default TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);