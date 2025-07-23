import { useEffect, useState } from "react"

function useCurrencyInfo(currency1){
    let [data, setData] = useState({})
    console.log("useCurrencyInfo called")
    useEffect(() => {
        console.log('Use effect called');
        (async function (){
            let stringResponse = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency1}.json`)
            let response = await stringResponse.json()
            console.log(response[currency1])
            setData(response[currency1])
        })()
    }, [currency1])
    return data 
}

export  {useCurrencyInfo}