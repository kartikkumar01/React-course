import { useEffect, useState } from "react"

function App(){
  let [isChecked, setIsChecked] = useState(false)
  useEffect(()=>{
    (isChecked)? console.log('It is checked') : console.log('It is unchecked')
  }, [isChecked])

  return(
    <>
    <h1 className="bg-red-500">Experiment with React</h1>
    <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)}/>
    </>
  )
}

export default App