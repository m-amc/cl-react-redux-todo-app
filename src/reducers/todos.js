// dispatch function looks for a matching action type defined here.

// We can also set an initialState and use the initial state as the default value instead of an empty array.
// const initialState = [
//   { id: 0, text: 'sample todo', completed: false }
// ]

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // We can't mutate state so we need to return a new state having the existing data plus the additional data
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'LOAD_TODOS':
      return [...state, ...action.payload]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    default:
      return state;
  }
}

export default todos