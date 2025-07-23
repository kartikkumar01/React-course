import { useState } from "react"

function App(){
  let [color, setColor] = useState('gray')
  return (
    <div className="w-full h-[100vh]" style={{backgroundColor : color}}>
    <Button text="Red" onClickHandler={() => setColor('red')}/>
    <Button text="Green" onClickHandler={() => setColor('green')}/>
    <Button text="Blue" onClickHandler={() => setColor('blue')}/>
    </div>
  )
}

function Button({onClickHandler, text}){
  return(
  <button className="border-4 border-amber-50 cursor-pointer m-5" onClick={onClickHandler}>{text}</button>
  )
}

export default App
