import React from 'react';

import data from './data.json';
import { ACTIONS } from './';

const TodoAppContext = React.createContext();

const initialState = data;

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEW:
      return [
        ...state,
        {
          task: action.name,
          done: false,
        }
      ];

    case ACTIONS.DELETE:
      return { ...state, count: state.count + 1 };

    case ACTIONS.TOGGLE:
      return { ...state, count: state.count - 1 };

    case ACTIONS.RESET:
      return initialState;

    default:
  }
};

function TodoAppContextProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TodoAppContext.Provider
      value={{
        state,
        dispatch
      }}>

      {props.children}

    </TodoAppContext.Provider >
  );
}

export { TodoAppContext, TodoAppContextProvider };

