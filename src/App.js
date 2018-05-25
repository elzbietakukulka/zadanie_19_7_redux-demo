import React from 'react';
import './App.css';
import CommentsListContainers from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
     <h2>Add comment</h2>
      <CommentsListContainers />
      <DevTools />
    </div>
  );
};

export default App;
