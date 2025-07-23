import { useState } from "react"

export default function App() {
  let [username, setUsername] = useState('Kartik')

  return (
    <>
    {username}
      <Button text={username}/>
      <Button text={username}/>
    </>
  )
}

function Button({text}) {
  text += " kumar"
  return (
    <>
      <button className="px-4 py-2 border border-blue-600 text-black bg-amber-200 font bold" onClick={() =>  setCount(curr => curr + 1)}>{text}</button>
    </>
  )
}
