import { useState } from 'react';
import Login from './Login'
import './Dashboard.css'
const Dashboard=()=>{

    const[isLogin,setisLogin]=useState(false)


    const showMe=()=>{
        setisLogin(true)
    }
    return(
        <div className='container'>
            {
                isLogin ? <Login isLogin={setisLogin}/>
                        : <button className='button' onClick={showMe}>showMe</button>
            }
            
        </div>
    )
}
export default Dashboard;