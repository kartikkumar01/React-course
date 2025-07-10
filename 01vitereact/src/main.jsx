import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
console.log(React.createElement('a',{class : 'hola'}, 'click here'))
createRoot(document.getElementById('root')).render(
    <App />
)
