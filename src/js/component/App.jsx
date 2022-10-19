import React from 'react';
import '/workspace/react-hello/src/js/App.css';
import TodoList from '/workspace/react-hello/src/js/component/TodoList.jsx';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;