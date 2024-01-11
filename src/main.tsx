import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import'bootstrap/dist/css/bootstrap.css'


const root = document.getElementById('root') as HTMLElement || null;
ReactDOM.createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);