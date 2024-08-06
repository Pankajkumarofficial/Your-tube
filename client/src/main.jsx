import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createstore } from 'redux';
import { thunk } from "redux-thunk";
import App from './App';
import './index.css';
import Reducers from './Reducers';
const store = createstore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="170136872607-gcovhdhkf1lm5mashtg6vu8te7hsv8i4.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
)
