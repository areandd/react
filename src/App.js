import React from 'react';
import TodoList from './TodoList'


function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>add todo</button>
    <button>clear todo</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
