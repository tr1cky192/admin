import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'App/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'routes/AppRouter';
import { getRefs } from 'common/utils';

const { rootRef } = getRefs();

const root = createRoot(rootRef);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

// import reportWebVitals from './tests/reportWebVitals';
// reportWebVitals(console.log);
