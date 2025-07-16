import { useEffect, useState, useRef } from "react"

function App() {
  let [length, setLength] = useState(5)
  let [isCharacterAllowed, setIsCharacterAllowed] = useState(false)
  let [isNumberAllowed, setIsNumberAllowed] = useState(false)
  let [password, setPassword] = useState('')
  let inputRef = useRef(null)

  function handleCopyButton(){
    window.navigator.clipboard.writeText(password)
    inputRef.current.select()
  }

  function passwordGenerator(){
    let password = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isCharacterAllowed) str+= '*()_+&^%*$#@!~`{}[]?/;:|'
    if(isNumberAllowed) str+= '0123456789'
    for(let i = 0; i < length; i++){
      //Here I need to generate a random number between 0 to str.length
      let index = Math.trunc(Math.random() * str.length)
      password += str[index]
    }
    return password
  }
  
  useEffect(() => {
    setPassword(passwordGenerator())
  },[length, isCharacterAllowed, isNumberAllowed])

  return (
   <>
   <h1 id="h1" className='bg-red-500 text-center text-2xl py-3 font-bold'>Password Generator</h1>
   <div className="bg-gray-500 w-[50%] m-auto p-5">
    <div>
      <input ref={inputRef} readOnly value={password} type="text" className="rounded-l-full p-2 bg-white text-red-400 outline-none "/>
      <button onClick={handleCopyButton} className="bg-blue-400 cursor-pointer p-2 rounded-r-full">Copy</button>
    </div>
    <div>
      <input type="range" min="5" max="12" value={length} onChange={(e) => setLength(e.target.value)}/>
      <label>Length({length})</label>
      <input id="chkbx1" type="checkbox" onChange={() => setIsCharacterAllowed(!isCharacterAllowed)}/>
      <label htmlFor="chkbx1">Characters({String(isCharacterAllowed)})</label>
      <input id="chkbx2" type="checkbox" onChange={() => setIsNumberAllowed(!isNumberAllowed)} />
      <label htmlFor="chkbx2">Numbers({String(isNumberAllowed)})</label>
    </div>
   </div>
   </>
  )
}

export default App
