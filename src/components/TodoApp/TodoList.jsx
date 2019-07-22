import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import { TodoAppContext } from './state/';

import Icon from '../Icon';
import Button from '../Button';

const TodoList = React.memo(() => {
  const {state: todos} = React.useContext(TodoAppContext);

  console.log({todos})

  return todos.length === 0
    ? <p style={{ color: 'red' }}>No todos to show.<br />Create a new one!</p>
    : (
      <Todos>
        {todos.map(({ task, done }) => (
          <Todo key={task}>
            <TodoTitle>{task}<div>done: {String(done)}</div></TodoTitle>
            <Button color="blue">
              <Icon name="trash-can" />
            </Button>
          </Todo>
        ))}
      </Todos>
    )
});

const Todos = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Todo = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${gs(24)};
`;

const TodoTitle = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

export default TodoList;