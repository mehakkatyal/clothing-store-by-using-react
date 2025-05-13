// const Createuser=()=>{
//     return(
//         <h1>welcome to create user</h1>
//     );



// }
    import { useState } from "react";
    import Nav from "../components/nav";
    import {useNavigate } from "react-router-dom";

    
    function Myform() {
        const navigate=useNavigate();
        const [username, setusername] = useState("");
        const [first_name, setfirstname] = useState("");
        const [last_name, setlastname] = useState("");
        const [password, setpassword] = useState("");
        const [email, setemail] = useState("");
        const [phonenumber, setphonenumber] = useState("");
        const [is_vendor, setvendor] = useState("");
    
        const submit = async (e) => {
            e.preventDefault();
        
    
            const userData = {
                username,
                first_name,
                last_name,
                email,
                password,
                phonenumber,
                is_vendor:is_vendor==="yes"
            };
            const response = await fetch("http://localhost:8000/api/user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //  "Authorization": `Token ${token}`
                },
                body: JSON.stringify(userData),
              
            });
           
              
       

            if (response.ok){
                alert("user created sussfully");
                navigate('/Login');
            } else{
                alert("failed to create user")
            }
        };

    
        return (
            <>
                <Nav />
                <div className="abc">
                        <div className="h">
                            <h1>Create New User</h1>
                        </div>
                        <form onSubmit={submit}>
                            <div className="name">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="firstname">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    value={first_name}
                                    onChange={(e) => setfirstname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="lastname">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    value={last_name}
                                    onChange={(e) => setlastname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="password">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="email">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="phone">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    value={phonenumber}
                                    onChange={(e) => setphonenumber(e.target.value)}
                                />
                            </div>
                            <div className="vendor">
                                <label>Vendor</label>
                                <select value={is_vendor} onChange={(e) => setvendor(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="yes">Vendor</option>
                                    <option value="no">Not Vendor</option>
                                </select>
                            </div>
                            <button type="submit">submit</button>
                           
                        </form>
                    </div>
            </>
        );
    }
    
    
    export default Myform;

    // import { useState } from "react";
    // import Nav from "../components/nav";
    // function Myform (){
    //     const[name,setname]=useState("");
    //     const[firstname,setfirstname]=useState("");
    //     const[lastname,setlastname]=useState("");
    //     const[password,setpassword]=useState("");
    //     const[email,setemail]=useState("");
    //     const[phonenumber,setphonenumber]=useState("");
    //     const[is_vendor,setvendor]=useState("")
    //     const submit=(e)=>{
    //         e.preventDefault();
    //     const User=()=>{
    //         const[user,setuser]=useState()
    //         const getuser=async()=>{
    //             let url="http://localhost:8000/api/user/"
    //             const response=await fetch(url)
    //             setuser(await response.json())
    //         }
    //          console.log(User)
    //           useEffect(()=>{
    //             getuser()
    //           },[])
    //     }

        

    //     };
    //     return(
    //         <>
    //         <Nav/>

    //         <div className="h">
    //             <h1>Create New User</h1>
    //         </div>


    //         <form onSubmit={submit}>
    //             <div className="name">
    //                 <label>User Name</label>
    //                 <input type="text" value={name}
    //                 onChange={(e) =>setname(e.target.value)}/>
    //             </div>
    //             <div className="firstname">
    //                 <label>First Name</label>
    //                 <input type="text" value={firstname}
    //                 onChange={(e) =>setfirstname(e.target.value)}/>
    //             </div>
    //             <div className="lastname">
    //                 <label>Last Name</label>
    //                 <input type="text" value={lastname}
    //                 onChange={(e)=>setlastname(e.target.value)}/>
    //             </div>
    //             <div className="password">
    //                 <label>Password</label>
    //                 <input type="password" value={password}
    //                 onChange={(e)=>setpassword(e.target.value)}/>
    //             </div>
    //             <div className="email">
    //                 <label>Email</label>
    //                 <input type="emaiil" value={email}
    //                 onChange={(e)=>setemail(e.target.value)}/>
    //             </div>
    //             <div className="phone">
    //                 <label>Phonenumber</label>
    //                 <input type="tel" value={phonenumber}
    //                 onChange={(e)=>setphonenumber(e.target.value)}/>
    //             </div>
    //             <div className="vendor">
    //                 <label>Vendor</label>
    //                 <select value={is_vendor} onChange={(e)=>setvendor(e.target.value)}>
    //                 {/* <option value="">-- Select --</option> */}
    //                 <option value="yes">Vendor</option>
    //                 <option value="no">Not Vendor</option>
    //                 </select>
    //             </div>
                
    //             <button type="submit">submit</button>
    //         </form>
    //     </>
            
    //     )

    // }
    // export default Myform

