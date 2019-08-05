import React from 'react';

import data from './data.json';
import * as ACTIONS from './actions';

const TodoAppContext = React.createContext();

const initialState = data;

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.NEW:
      return [
        ...todos,
        {
          id: +(new Date()),
          task: action.name,
          done: false,
        }
      ];

    case ACTIONS.DELETE:
      return [
        ...todos.slice(0, action.index),
        ...todos.slice(action.index + 1)
      ];

    case ACTIONS.TOGGLE:
      const newTodos = [...todos];
      newTodos[action.index].done = !(newTodos[action.index].done);
      return newTodos;

    case ACTIONS.RESET:
      return initialState;

    default:
  }
};

function TodoAppContextProvider(props) {
  let [todos, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TodoAppContext.Provider
      value={{
        todos,
        dispatch
      }}>

      {props.children}

    </TodoAppContext.Provider >
  );
}

export { TodoAppContext, TodoAppContextProvider };

