import React from 'react';

import HomePage from './pages/HomePage';

import Button from 'antd/es/button';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>      
        <h2>
          React Full-Stack
        </h2>
        <HomePage />        
      </header>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
