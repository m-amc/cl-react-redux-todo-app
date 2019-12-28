// Actions describes the "what". it expects two parameters - the type and the payload

import { getTodos } from '../lib/todoServices';

let nextTodoId = 10;

export const loadTodos = (todos) => ({
  type: 'LOAD_TODOS',
  payload: todos
})

// This is a thunk. A thunk returns a function so we can delay the execution of the async call
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then(res => {
      console.log(loadTodos(res))
      dispatch(loadTodos(res))
    })
  }
}

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}