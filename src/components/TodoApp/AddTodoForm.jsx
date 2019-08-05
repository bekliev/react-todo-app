import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import { newTodo } from './state/actions';
import { TodoAppContext } from './state/context';

import Icon from '../Icon';
import Button from '../Button';

const AddTodoForm = () => {
  const { dispatch } = React.useContext(TodoAppContext);

  const handleSubmit = React.useCallback(e => {
    // Prevent the default browser's action
    e.preventDefault();

    // Retrieve required things
    const field = e.currentTarget.elements['task-name'];
    const taskName = field.value;

    // Update the state
    dispatch(newTodo(taskName));

    // Reset value
    field.value = '';
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Task name" name="task-name" />

      <Button color="red" type="submit" radius="0 8px 8px 0">
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