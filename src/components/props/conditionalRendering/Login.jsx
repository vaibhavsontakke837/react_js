import './Login.css'
const Login=(props)=>{
    const hideme=()=>{
        props.isLogin(false)
    }
    return(
        <div>
           <div className="container">
           <h1>Welcome to My Block</h1>
            <button onClick={hideme}>Hide Me</button>
           </div>
        </div>
    )
}
export default Login;