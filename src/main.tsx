import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/themeContext.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from './pages/CreateBlog.tsx';
import Login from './pages/Login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/blog-login' element={<Login />} />
          <Route path='/blog-create' element={<CreateBlog />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
