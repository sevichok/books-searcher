import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as AppRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import BookDetail from './components/BookDetail';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter>
        <Routes>
          <Route index path='/books' element={<App />}></Route>
          <Route path=':id' element={<BookDetail />}></Route>
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>
      </AppRouter>
    </Provider>
  </React.StrictMode>
);
