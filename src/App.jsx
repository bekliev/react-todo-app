import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <>
      <GlobalStyle p={50} />

      <TodoApp />
    </>
  );
}

export default App;