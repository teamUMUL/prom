import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store/store.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider로 App 컴포넌트를 감싸줍니다. */}
      <App />
    </Provider>
  </React.StrictMode>
);
