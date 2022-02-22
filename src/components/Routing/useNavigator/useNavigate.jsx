import { useNavigate } from "react-router";
// import { useHistory } from "react"


const UseNavigatorDemo=()=>{

    // const history=useHistory()
    const navigate=useNavigate();
    let paymentStatus = true;
    const orderId = "amz_12e56_4556";
    const paymentId = "125e695Z36549"

    const navigateMe=()=>{
        if(paymentStatus === true){
            navigate("/order-success/" + orderId + "/" + paymentId);
            // history.push("/order-success")
        }else{
            navigate("/order-failed");
            // history.push("/order-failed")
        }   
    }
    return(
        <div>
            <h1>useNavigator Component</h1>
            <button onClick={navigateMe}>Order Now</button>
            {/* <button onClick={previousPage}>Previous Page</button>
            <button onClick={navigateMe}>Next Page</button> */}
        </div>
    )
}
export default UseNavigatorDemo;