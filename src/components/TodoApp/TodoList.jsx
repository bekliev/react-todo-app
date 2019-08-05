import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import { TodoAppContext } from './state/context';
import { deleteTodo } from './state/actions';

import Icon from '../Icon';
import Button from '../Button';

const TodoList = React.memo(() => {
  const { todos, dispatch } = React.useContext(TodoAppContext);

  console.log({ todos });

  const handleClick = React.useCallback(e => {
    // Prevent the default browser's action
    e.preventDefault();

    // Retrieve required thing
    const index = e.currentTarget.getAttribute('data-index');

    // Update the state
    dispatch(deleteTodo(index));
  }, [dispatch]);

  return todos.length === 0
    ? <p style={{ color: 'red' }}>No todos to show.<br />Add a new one!</p>
    : (
      <Todos>
        {todos.map(({ task, id, done }, index) => (
          <Todo key={id || task}>
            <TodoTitle>{task}<div>done: {String(done)}</div></TodoTitle>
            <Button color="blue" onClick={handleClick} data-index={index}>
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