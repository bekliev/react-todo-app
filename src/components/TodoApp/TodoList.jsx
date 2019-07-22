import React from 'react';

import Icon from '../Icon';
import Button from '../Button';

const TodoList = React.memo(({ todos }) => (
  todos.length === 0
    ? <p style={{ color: 'red' }}>No todos to show.<br />Create a new one!</p>
    : (
      <ol>
        {todos.map(({ task, done }) => (
          <li key={task}>
            <div>done: {String(done)}</div>
            <div>{task}</div>
            <Button color="blue">
              <Icon name="trash-can" />
            </Button>
          </li>
        ))}
      </ol>
    )
))

export default TodoList;