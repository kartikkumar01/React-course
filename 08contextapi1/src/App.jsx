import {Dashboard} from "./components/Dashboard"
import { UserContextProvider } from "./context/UserContextProvider"

export default function App(){
  return(
    <UserContextProvider>
    <Dashboard/>
    </UserContextProvider>
  )
}

