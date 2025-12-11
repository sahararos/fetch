import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Testing from './Testing.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/fetch">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/fetch" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
