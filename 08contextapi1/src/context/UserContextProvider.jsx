import { useEffect, useState } from "react"
import { userContext } from "./userContext"

function UserContextProvider({ children }) {
    let [user, setUser] = useState('')
    useEffect(() => {
      fetch('https://api.github.com/users/kartikkumar01')
      .then(res => res.json())
      .then(res => setUser(res))
    }, [])
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export {UserContextProvider}