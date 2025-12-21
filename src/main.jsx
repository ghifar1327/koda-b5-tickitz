import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter } from 'react-router';
import Router from './Router.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from './redux/store.js';
import { Provider } from 'react-redux';
import { HistoryProvider } from './contexts/HistoryContex.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistoryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HistoryProvider>
  </StrictMode>,
);
