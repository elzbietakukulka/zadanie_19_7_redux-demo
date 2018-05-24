import React from 'react';
import './App.css';
import CommentsListContainers from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
     <h2>Add comment</h2>
      <CommentsListContainers />
    </div>
  );
};

export default App;
