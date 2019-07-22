import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../../base/utils';

import Icon from '../Icon';
import Button from '../Button';

const AddTodoForm = () => (
  <Form onSubmit={console.log}>
    <Input placeholder="Task name" />

    <Button type="submit" radius="0 8px 8px 0">
      <Icon name="plus" />
    </Button>
  </Form>
);

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px 0 0 8px;
  font-weight: bold;
  padding: ${gs(22)} ${gs(24)};
  width: 100%;
`;

export default React.memo(AddTodoForm);