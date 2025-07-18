import { useState, useEffect } from "react"

export default function App(){
  console.log('App Renders')
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(10)
  let countVariable = 1
  useEffect(()=>{
    console.log('useEffect called after the render')
  },[count,countVariable])
  return(
    <>
    <h1>Hello Experimental {count}</h1>
    <button onClick={()=>setCount(count)}>Change State1</button>
    <button onClick={()=>setCount2(currState => currState+1)}>Change State2</button>
    <button onClick={() => {++countVariable; console.log(countVariable)}}>Change Variable</button>
    </>
  )
}