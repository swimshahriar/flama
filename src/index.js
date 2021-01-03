import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ProvideAuth } from './hooks/useAuth';

ReactDOM.render(
  <ProvideAuth>
    <App />
  </ProvideAuth>,
  document.getElementById('root')
);
