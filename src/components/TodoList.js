import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

// We spread the todos and toggleTodo props here.  These props came from the the VisibileTodoList container component
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map((todo, index) => (
        // we are spreading ...todo here so Todo component can directly access id, text, completed props instead of doing todo.id, todo.text, todo.completed
        <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
      ))
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;