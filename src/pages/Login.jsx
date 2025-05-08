// const Login=()=>{
//     return(
//         <h1>welcome to login page</h1>
//     );
// }
// export default Login
import { useState,useEffect } from "react";
import Nav from "../components/nav";
function Myform() {
    const[Username,setUsername]=useState("")
    const[Password,setpassword]=useState("")

    const submit=async(e)=>{
        e.preventDefault();
        
    }
    return(
        <>
        <Nav/>
        <h1>Login</h1>
     
        <form onSubmit={submit}>
            <label>UserName</label>
            <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required/>

            <label>Password</label>
            <input
            type="password"
            value={Password}
            onChange={(e)=>setpassword(e.target.value)}
            required/>
             <button type="submit">Login</button>




        </form>
    </>
        

    )
}
export default Myform