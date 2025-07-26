import { UserContextProvider, useUserContext } from "./contexts/userContext"

export default function App() {
  let name = 'Kartik Kumar'
  return (
    <>
    <UserContextProvider value={name}>
    <Para />
    </UserContextProvider>
    <Para />
    </>
  )
}

function Para(){
  return (
    <>
    <p>Hello this is a Paragraph</p>
    <Button />
    <p>This is also a pragraph</p>
    </>
  )
}

function Button() {
  let name = useUserContext()
  return (
    <>
      <button
       className="
        m-5
        cursor-pointer 
        hover:scale-110 
        transition-all 
        rounded 
        px-4 
        py-2 
        border 
        border-blue-600 
        text-black 
        bg-amber-200 
        font bold"
        >
          Welcome {name}
        </button>
    </>
  )
}
