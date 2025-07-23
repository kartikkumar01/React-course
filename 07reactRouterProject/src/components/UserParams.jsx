import { useEffect, useState } from "react"
import { useParams } from "react-router"

export function UserParams() {
    console.log("User component renders")
    const {username} = useParams()
    let [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(res => { setData(res); console.log(res) })
    },[username])
    return (
        <>
        <img src={data.avatar_url}  alt="" className="h-[150px] rounded-full block m-auto"/>
            <div className="text-center text-2xl my-8">Name : {data.name} </div>
            <div className="text-center text-2xl my-8">Username : {data.login} </div>
            <div className="text-center text-2xl my-8">Location : {data.location} </div>
            <div className="text-center text-2xl my-8">Public repo : {data.public_repos} </div>
        </>
    )
}