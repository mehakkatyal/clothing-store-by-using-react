// const Login=()=>{
//     return(
//         <h1>welcome to login page</h1>
//     );
// }
// export default Login
import { useState,useEffect } from "react";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";
function Myform() {

    const navigate=useNavigate();
    const[username,setUsername]=useState("")
    const[password,setpassword]=useState("")

    const submit=async(e)=>{
        e.preventDefault();

        const Fromdata={
            username,
            password
        };
        const response = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Fromdata),
        
            })
            if(response.ok) {
                const result = await response.json();
                const { access } = result;
          
                localStorage.setItem('access_token', access);
                navigate('/');
          
            } else {
                const errorData = await response.json();
                console.error("Error",errorData)
                alert("Failed to login. ")
            }
        

        
    }
    return(
        <>
        <Nav/>
        <h1>Login</h1>
     
        <form onSubmit={submit}>
            <label>UserName</label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>

            <label>Password</label>
            <input
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            required/>
             <button type="submit">Login</button>




        </form>
    </>
        

    )
}
export default Myform