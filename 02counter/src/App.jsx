import { useState } from 'react'
import './App.css'

function App() {
//Js is written here
let [counter, updateUI] =  useState(5)

  return (
    <>
    <h1>Counter : {counter}</h1>
    <button onClick={() => updateUI(++counter)}>{counter} Increase {counter}</button>
    <br />
    <br />
    <button onClick={() => updateUI(--counter)}>{counter} Decrease {counter}</button>
    </>
  )
}

export default App
