import React from "react"
import './nav.css'
import { Link } from "react-router-dom";
function Nav(){
    const logout=()=>{
        localStorage.removeItem('access_token')
    }




    return(
        <>

        <div className="nav">
            <h1>Welcome to the Cloothing Pallet</h1>
            <button className="home"> <Link to="/">Home</Link> </button>
            {/* <button className="about">About us</button> */}
             <button className="about"><Link to="About">About Us</Link></button>
            <button className="createuser"><Link to="createuser">Createuser</Link></button>
            {/* <button className="login"><Link to="login">login</Link></button> */}
            {/* <button className="create">Create User</button> */}
            {
            localStorage.getItem('access_token')?
               <button className="logouot"> <Link onClick={()=>logout()}>Logout</Link></button>:
               <button className=""> <Link to={'/login'}>Login</Link></button>
            }
        </div>
       
        </>

   


    
    );
}
export default Nav