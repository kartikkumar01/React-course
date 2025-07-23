import { useContext } from "react"
import { userContext } from "../context/userContext"

function Button() {
    //This button need data from root component

    let user = useContext(userContext)
    
  return (
    <div style={{border : "2px solid white", padding : "10px"}}>
      <button>{user?.name}</button>
    </div>
  )
}

export {Button}