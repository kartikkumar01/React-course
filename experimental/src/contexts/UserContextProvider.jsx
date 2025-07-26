import { userContext } from "./userContext"
export function UserContextProvider({children, value}){
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}