import { useState } from "react"
const UseState = () =>{

const [count,setCount] = useState(0)

let date = new Date().toLocaleTimeString()
const [time,setTime] = useState(date)

let [clock,setClock]=useState(date)


const increment=() =>{
    setCount(count + 1)
}

    const getTime = ()=>{
        let date = new Date().toLocaleTimeString()
        setTime(date)
    }
    

    setInterval(()=>{
        let date = new Date().toLocaleTimeString()
        setClock(date)
    },1000)
    return( 
        <div style={{textAlign:"center"}}>
            <h1>useState() Hook Demo</h1>
            <h3>{count}</h3>
            <button onClick={increment}>click Me</button><br /><br />
            <hr />

            <h1>get Current Time</h1>
            <h3>{time}</h3>
            <button onClick={getTime}>click Me</button><br /><br />
            <hr />
            
            <h1>Digital clock</h1>
            <h1>{clock}</h1>

        </div>
    )
}
export default UseState