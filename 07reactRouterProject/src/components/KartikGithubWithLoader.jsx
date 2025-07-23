import { useLoaderData } from "react-router"
export default function KartikGithubWithLoader(){
    const data = useLoaderData()
    console.log(data)
    return (
        <img src={data.avatar_url} />
    )
}