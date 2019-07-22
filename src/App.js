import React from 'react';

import db from './base/db.json';
import GlobalStyle from './components/GlobalStyle';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <>
      <GlobalStyle p={50} />

      <TodoApp todos={db} />
    </>
  );
}

export default App;