import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { store } from './redux/store/store.js';
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
      </MantineProvider>
      </Provider>
  </React.StrictMode>
);


