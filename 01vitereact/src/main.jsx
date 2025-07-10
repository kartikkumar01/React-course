import ReactDOM,{ createRoot } from 'react-dom/client'
import Hola from './App.jsx'
import React from 'react'
// console.log(React.createElement('h1', null, 'Hi'))
createRoot(document.getElementById('root')).render(
    <Hola />
)
