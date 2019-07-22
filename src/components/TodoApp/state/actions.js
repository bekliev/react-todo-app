export const NEW = 'NEW';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';
export const RESET = 'RESET';

export const newTodo = name => ({
  type: NEW,
  name,
});

export const deleteTodo = index => ({
  type: DELETE,
  index,
});

export const toggleTodo = index => ({
  type: TOGGLE,
  index,
});

export const resetTodos = () => ({
  type: RESET
})