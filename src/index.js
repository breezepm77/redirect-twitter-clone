import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from './Context/AuthContext'
import {Provider as ProProvider} from './Context/AuthUser'

ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
    <Provider>
           <ProProvider>
           <App />
           </ProProvider>
  </Provider>
  </BrowserRouter>
        </React.StrictMode>,
    document.getElementById('root')
);