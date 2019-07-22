import React from 'react';

import Box from '../Box';
import Title from '../Title';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const TodoApp = React.memo(({ todos }) => (
  <Box>
    <Title fs={64} mt={0} mb={45}>Todo List</Title>

    <AddTodoForm />

    <TodoList todos={todos} />
  </Box>
));

export default TodoApp;