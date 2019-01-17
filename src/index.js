import React from 'react';
import ReactDOM from 'react-dom';

import Styled from './Styled';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Styled />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
