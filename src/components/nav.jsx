import React from "react"
import './nav.css'
import { Link } from "react-router-dom";
const Nav=()=>{
    return(

        <div className="nav">
            <h1>Welcome to the Cloothing Pallet</h1>
            <button className="home"> <Link to="/">Home</Link> </button>
            {/* <button className="about">About us</button> */}
             <button className="about"><Link to="About">About Us</Link></button>
            <button className="createuser"><Link to="createuser">Createuser</Link></button>
         

            <button className="login">Login</button>
            {/* <button className="create">Create User</button> */}
        </div>

   


    
    );
}
export default Nav