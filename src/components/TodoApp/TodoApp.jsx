import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import { TodoAppContextProvider } from './state/';

import Box from '../Box';
import Title from '../Title';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const TodoApp = React.memo(() => (
  <Box>
    <Title fs={64} mt={0} mb={0}>Todo List</Title>

    <Spacer size={50} />

    <TodoAppContextProvider>
      <AddTodoForm />

      <Spacer size={40} />

      <TodoList />
    </TodoAppContextProvider>
  </Box>
));

const Spacer = styled.hr`
  border: 0;
  background: none;
  margin: 0;
  padding-bottom: ${({ size }) => gs(size)};
`;

export default TodoApp;
