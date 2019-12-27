import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;

    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// mapStateToProps maps the redux state to the component props so we can access the specific redux state that we need for the component.  In this case, we can access the todos state.
// Note: the app's index.js holds the store.  the reducer/index.js is passed to the createStore function.  the state.todos and state.visibilityFilter here refers to the state tree as defined in the root reducer
const mapStateToProps = state => ({
  // The todos prop here filters the data based on the user selected filter
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// We are creating a connected TodoList component.  The TodoList component will have the todos state and toggleTodo as props
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)