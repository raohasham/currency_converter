import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    useEffect(()=>{
        const [data , setData] = useState({})
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        .then
    },[currency])

    return data

} 
export default useCurrencyInfo;