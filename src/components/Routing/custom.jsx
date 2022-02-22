import CounterPlus from "./customHook/CounterPlus";
import CounterMinus from "./customHook/CounterMinus";

const Custom=()=>{
    return(
        <div style={{marginTop:"4rem"}}>
            <h1>Custom Component</h1>
            <CounterPlus />
            <CounterMinus />
        </div>
    )
}
export default Custom;