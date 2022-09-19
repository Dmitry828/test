import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './screens/App/App';
import { store } from './core/store/store';
import { Normalize } from 'styled-normalize';
import './index.css';


export const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Normalize/>
      <App />
    </Provider>
  // </React.StrictMode>
);

