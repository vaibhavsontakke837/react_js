import { Link } from "react-router-dom";
import Error from './Navbar/error.jpg'
const PageNotFound=()=>{
    return(
        <div className="container">
            <div className="pagenotfound">
               <img src={Error} alt="" />
                <Link to="/">Go to Home</Link>
            </div>
        </div>
    )
}
export default PageNotFound;