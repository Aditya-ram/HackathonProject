import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Router from './components/Router.jsx'
createRoot(document.getElementById('root')).render(
    <Router/>
)
