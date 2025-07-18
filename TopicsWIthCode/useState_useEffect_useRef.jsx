import { useEffect, useState, useRef } from "react"

function App(){
  let [checked, setChecked] = useState(false)
  let firstRender = useRef(true)
  function alertMessage(){
    //Prevents from first render
    if(firstRender.current){
      firstRender.current = !firstRender.current
      return
    }
    console.log('State is changed!!')
  }
  useEffect(alertMessage, [checked])
  return(
    <>
    <input type="checkbox" onChange={() =>{
       setChecked(!checked) //state is changed here
      //  alertMessage()
    }}/>{String(checked)}
    </>
  )
}

export default App