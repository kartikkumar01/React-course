import { useState } from 'react'
import './App.css'

function App() {
//Js is written here
let [counter, setCounter] =  useState(5)
function increment(){
  if(counter < 20){
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
}
function decrement(){
  if(counter > 0){
    setCounter(counter - 1)
  }
}
  return (
    <>
    <h1>Counter : {counter}</h1>
    <button onClick={increment}>{counter} Increase {counter}</button>
    <br />
    <br />
    <button onClick={decrement}>{counter} Decrease {counter}</button>
    </>
  )
}

export default App
