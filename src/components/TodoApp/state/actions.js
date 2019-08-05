export const NEW = 'NEW';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';
export const RESET = 'RESET';

export const newTodo = name => ({
  type: NEW,
  name,
});

export const deleteTodo = id => ({
  type: DELETE,
  id: Number(id),
});

export const toggleTodo = id => ({
  type: TOGGLE,
  id: Number(id),
});

export const resetTodos = () => ({
  type: RESET
})