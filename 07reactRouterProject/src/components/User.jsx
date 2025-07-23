import { useState } from "react"
import { useNavigate } from "react-router"

export function User(){
    let [input, setInput] = useState('')
    let navigate = useNavigate()
    function buttonClickHandler(e){
        e.preventDefault()
        console.log(input)
        if(input){
            navigate(`/user/${input}`)
        }
    }
    return(
        <>
        <h1 className="font-bold text-4xl text-center">Search Github User</h1>
        <form className="mt-10 w-[70%] m-auto text-center">
            <label htmlFor="username">Enter github username</label>
            <input className="mx-3 border outline-0 px-1" type="text" id="username" onChange={(e) => setInput(e.target.value)} required/>
            <br />
            <button className="px-4 bg-[#CA3500] m-auto block my-10 text-white py-2 rounded-xl cursor-pointer" onClick={buttonClickHandler}>Search</button>
        </form>
        </>
    )  
}