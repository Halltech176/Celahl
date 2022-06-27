import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import './App.scss';
import App from './App';
import Store from './Redux/Store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store = {Store}>
<BrowserRouter>
   <App />
</BrowserRouter>
</Provider>
  // </React.StrictMode>
);

