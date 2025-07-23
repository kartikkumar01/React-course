import { useEffect, useState } from "react"

export default function KartikGithubWithLoader(){
    let [data, setData] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            setData('https://avatars.githubusercontent.com/u/178091368?v=4')
        },3000)
    }, [])
    return (
        <img src={data} />
    )
}