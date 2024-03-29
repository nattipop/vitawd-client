import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
