import { useState } from 'react'
import './App.css'

function App() {
//Js is written here
let [counter, updateUI] =  useState(5)
function increment(){
  if(counter < 20){
    counter++
    console.log(counter)
    updateUI(counter)
  }
}
function decrement(){
  if(counter > 0){
    counter--
    console.log(counter)
    updateUI(counter)
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
