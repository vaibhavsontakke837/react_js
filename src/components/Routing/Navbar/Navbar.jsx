import { NavLink } from "react-router-dom";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
// import Home from "./Routing/Home";
import About from "../About";
import Contact from '../Contact'
import Services from '../Services';
import Custom from '../custom';
import Login from '../login';
import PageNotFound from '../PageNotFound';
// import Navbar from '../Navbar';
import OrderSuccess from '.././useNavigator/orderSuccess';
import OrderFailed from "../useNavigator/orderFailed"
import Practice from "../../../practice/first"
import "./Navbar.css"
const Home= React.lazy(()=> import("../Home"))
const Navbar = () => {
    const [isLogedIn,setIsLogedIn]=useState(false)

    return (
        <BrowserRouter>
        {/* <Navbar /> */}
        <ul className="navbar">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/custom-hook">Custom</NavLink>
            </li>
            <li>
                <NavLink to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink to="/practice">Practice</NavLink>
            </li>
        </ul>
        <Suspense fallback={
            <h1 style={{marginTop:"4rem"}}>Loading...</h1>
        }>
        <Routes>
            <Route path="/" element={isLogedIn ? <Home /> : <Navigate to="/Login" />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/custom-hook" element={<Custom />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/practice" element={<Practice />}/>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="/order-success/:orderId/:paymentId" element={<OrderSuccess />}/>
            <Route path="/order-failed" element={<OrderFailed />}/>
        </Routes>
        </Suspense>
   </BrowserRouter>
        
    )
}
export default Navbar;