import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import { ACTIONS, TodoAppContext } from './state/';

import Icon from '../Icon';
import Button from '../Button';

const AddTodoForm = () => {
  const { dispatch } = React.useContext(TodoAppContext);

  console.log({dispatch})

  const handleSubmit = e => {
    e.preventDefault();

    const field = e.currentTarget.elements['task-name'];
    const taskName = field.value;

    dispatch(ACTIONS.newTodo(taskName));

    field.value = '';
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Task name" name="task-name" />

      <Button type="submit" radius="0 8px 8px 0">
        <Icon name="plus" />
      </Button>
    </Form>
  )
};

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 0;
  border-radius: 8px 0 0 8px;
  font-weight: bold;
  padding: ${gs(22)} ${gs(24)};
  width: 100%;

  &:focus { border-color: rgba(0, 0, 0, 0.6) }
`;

export default React.memo(AddTodoForm);