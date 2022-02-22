import CustomMinus from "../Hooks/CustomHooks/customMinus"
// import CustomPlus from "../Hooks/CustomHooks/customPlus"
const CustomHook=()=>{
    return(
        <div style={{marginTop:"4rem"}}>
            <h1>custom Hooks Component</h1><hr /><br />
            {/* <CustomPlus /> */}
            <CustomMinus />
        </div>
    )
}
export default CustomHook;