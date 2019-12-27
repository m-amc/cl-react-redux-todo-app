import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// connect() gives us access to dispatch function so we can use it here
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          // action addTodo expects an argument for payload
          dispatch(addTodo(input.value));
          input.value = ''
        }}
      >
        {/* ref attribute is used so we can assign input var with the input node and therefore we can use the input var as a reference to the element to get its value and to assign an empty string to the input field after a todo item is added */}
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

// connect() returns a new, connected component class that wraps the component we passed in.  It provides its connected component with the pieces of the data it needs from the store and the functions it can use to dispatch actions to the store.
export default connect()(AddTodo)