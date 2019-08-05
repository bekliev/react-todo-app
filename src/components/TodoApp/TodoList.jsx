import React from 'react';
import styled from 'styled-components';

import { getSize as gs, downloadObjectAsJson } from '../../base/utils';

import { TodoAppContext } from './state/context';
import { deleteTodo, deleteAllTodos, toggleTodo } from './state/actions';

import Icon from '../Icon';
import Button from '../Button';
import Spacer from '../Spacer';

const TodoList = React.memo(() => {
  const { todos, dispatch } = React.useContext(TodoAppContext);

  // console.log({ todos });

  const handleClick = React.useCallback(({ currentTarget: el }) => {
    // Retrieve required thing
    const id = el.parentElement.getAttribute('data-id');

    switch (el.name) {
      case 'toggle': return dispatch(toggleTodo(id));
      case 'delete': return dispatch(deleteTodo(id));
      case 'deleteAll': return window.confirm('Are you sure?') && dispatch(deleteAllTodos());
      default:
    }
  }, [dispatch]);

  const handleDownload = React.useCallback(() => downloadObjectAsJson(todos), [todos]);

  const map = ({ task, id, done }) => (
    <Todo key={id || task} data-id={id}>
      <TodoTitle className={done ? 'done' : ''} onClick={handleClick} name="toggle">
        {task}
      </TodoTitle>
      <Button color="blue" onClick={handleClick} name="delete">
        <Icon name="trash-can" />
      </Button>
    </Todo>
  )

  return todos.length === 0
    ? <p style={{ color: '#da0606' }}>No todos to show.<br />Add a new one!</p>
    : (
      <>
        <Todos>
          {todos.filter(({ done }) => !done).map(map)}
        </Todos>

        <h2>Done</h2>
        <Todos>
          {todos.filter(({ done }) => done).map(map)}
        </Todos>

        <Spacer size={40} />

        <Button onClick={handleClick} name="deleteAll" color="blue" block>
          <Icon name="trash-can" /> Delete All
        </Button>

        <Spacer size={50} />

        <Button onClick={handleDownload} name="download" color="green" block>
          <Icon name="download" /> data.json
        </Button>
      </>
    )
});

const Todos = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Todo = styled.li`
  display: flex;
  margin-bottom: ${gs(24)};
`;

const TodoTitle = styled(Button)`
  flex-grow: 1;
  font-weight: bold;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  word-break: break-word;

  > * {
    margin: 0;
  }

  &.done {
    text-decoration: line-through;
    color: #bf002e;
  }
`;

export default TodoList;