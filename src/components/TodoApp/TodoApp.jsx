import React from 'react';

import { TodoAppContextProvider } from './state/context';

import Box from '../Box';
import Title from '../Title';
import Spacer from '../Spacer';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoDownload from './TodoDownload';

const TodoApp = React.memo(() => (
  <Box>
    <Title fs={64} mt={0} mb={0}>Todo List</Title>

    <Spacer size={50} />

    <TodoAppContextProvider>
      <AddTodoForm />

      <Spacer size={40} />

      <TodoList />

      <TodoDownload />
    </TodoAppContextProvider>
  </Box>
));

export default TodoApp;
