import React from 'react';
import ReactDOM from 'react-dom';

// ** Redux Provider  ** //
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

// ** Include App To Our Project ** //
import App from './App';

// ** Import Bootstrap ** //
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// ** Fontawesome ** //
import "@fortawesome/fontawesome-free/css/all.min.css";
// ** Css Style ** //
import './index.css';

// ** Redux Provider ** //
import { store } from './Redux/Store/Store';

ReactDOM.render(

  <React.StrictMode>

    <BrowserRouter>

      <Provider store={store}>

        <App />

      </Provider>

    </BrowserRouter>

  </React.StrictMode>,

  document.getElementById('root')
);