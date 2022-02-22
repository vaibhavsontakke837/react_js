import { useParams } from "react-router-dom";
const OrderSuccess=()=>{
    const { orderId, paymentId }=useParams()
    return (
        <div>
            <h1 style={{marginTop:"4rem"}}>Your Order Successfull...!</h1>
            <h1>Your Order ID : { orderId }</h1>
            <h1>Your Payment ID : { paymentId }</h1>
        </div>
    )
}
export default OrderSuccess;