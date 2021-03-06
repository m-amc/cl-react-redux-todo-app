import React from 'react';
import PropTypes from 'prop-types';

// onClick, completed, text props were passed by the TodoList component
const Todo = ({ onClick, completed, text, index }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo