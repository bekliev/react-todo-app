import React from 'react';

import tasks from './db.json';
import GlobalStyle from './components/GlobalStyle';
import Box from './components/Box';
import Title from './components/Title';

function App() {
  return (
    <>
      <GlobalStyle p={50} />

      <Box>
        <Title fs={64} mt={0} mb={45}>Todo List</Title>

        <form>
          <input placeholder="Название задачи" />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none"><path fill="#fff" fill-rule="evenodd" d="M25.4 7h-5.8v12.6H7v5.8h12.6V38h5.8V25.4H38v-5.8H25.4V7z" clip-rule="evenodd" /></svg>
          </button>
        </form>

        {tasks.length && (
          <ol>
            {tasks.map(({ task, done }) => (

              <li>
                <div>done: {String(done)}</div>
                <div>{task}</div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none"><path fill="#fff" d="M5.8 31.1c0 2.1 1.8 3.9 4 3.9h15.5c2.1 0 3.9-1.8 3.9-3.9V7.8H5.8V31zM31.1 2h-6.8l-2-1.9h-9.7l-2 2H4v3.8H31V2z" /></svg>
                </button>
              </li>
            ))}
          </ol>
        )}
      </Box>
    </>
  );
}

export default App;