import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import './config/ReactotronConfig';
import GlobalStyled from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyled />
    </Router>
  );
}

export default App;
