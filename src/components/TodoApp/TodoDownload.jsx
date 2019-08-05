import React from 'react';

import { TodoAppContext } from './state/context';

import { downloadObjectAsJson } from '../../base/utils';
import Spacer from '../Spacer';
import Button from '../Button';
import Icon from '../Icon';

const TodoDownload = React.memo(() => {
  const { todos } = React.useContext(TodoAppContext);

  const handleClick = React.useCallback(() => downloadObjectAsJson(todos), [todos]);

  return todos.length > 0 && (
    <>
      <Spacer size={20} />

      <Button onClick={handleClick}>
        <Icon name="download" /> data.json
      </Button>
    </>
  )
})

export default TodoDownload;