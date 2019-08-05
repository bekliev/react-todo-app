import React from 'react';

import { TodoAppContext } from './state/context';

import Spacer from '../Spacer';
import Button from '../Button';
import Icon from '../Icon';

const TodoDownload = React.memo(() => {
  const { todos } = React.useContext(TodoAppContext);
  return todos.length > 0 && (
    <>
      <Spacer size={20} />

      <Button>
        <Icon name="download" /> data.json
      </Button>
    </>
  )
})

export default TodoDownload;