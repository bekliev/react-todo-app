import React from 'react';

import db from './base/db.json';
import GlobalStyle from './components/GlobalStyle';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <>
      <GlobalStyle p={50} />

      <TodoApp tasks={db} />
    </>
  );
}

export default App;