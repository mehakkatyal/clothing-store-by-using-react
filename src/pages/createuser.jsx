// const Createuser=()=>{
//     return(
//         <h1>welcome to create user</h1>
//     );



// }
    // import { useState } from "react";
    // import Nav from "../components/nav";
    
    // function Myform() {
    //     const [name, setname] = useState("");
    //     const [firstname, setfirstname] = useState("");
    //     const [lastname, setlastname] = useState("");
    //     const [password, setpassword] = useState("");
    //     const [email, setemail] = useState("");
    //     const [phonenumber, setphonenumber] = useState("");
    //     const [is_vendor, setvendor] = useState("");
    
    //     const submit = async (e) => {
    //         e.preventDefault();
    
    //         const userData = {
    //             username: name,
    //             password: password,
    //             first_name: firstname,
    //             last_name: lastname,
    //             email: email,
    //             phone: phonenumber, 
    //             is_vendor: is_vendor == "yes",
    //         };
    
    //         try {
    //             const response = await fetch("http://localhost:8000/api/user/", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(userData),
    //             });
    
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 alert("User created successfully!");
    //                 console.log(data);
    //             } else {
    //                 const errorData = await response.json();
    //                 console.error("Error:", errorData);
    //                 alert("Failed to create user.");
    //             }
    //         } catch (error) {
    //             console.error("Network error:", error);
    //             alert("Something went wrong.");
    //         }
    //     };
    
    //     return (
    //         <>
    //             <Nav />
    //             <div className="abc">
    //                     <div className="h">
    //                         <h1>Create New User</h1>
    //                     </div>
    //                     <form onSubmit={submit}>
    //                         <div className="name">
    //                             <label>User Name</label>
    //                             <input
    //                                 type="text"
    //                                 value={name}
    //                                 onChange={(e) => setname(e.target.value)}
    //                                 required
    //                             />
    //                         </div>
    //                         <div className="firstname">
    //                             <label>First Name</label>
    //                             <input
    //                                 type="text"
    //                                 value={firstname}
    //                                 onChange={(e) => setfirstname(e.target.value)}
    //                                 required
    //                             />
    //                         </div>
    //                         <div className="lastname">
    //                             <label>Last Name</label>
    //                             <input
    //                                 type="text"
    //                                 value={lastname}
    //                                 onChange={(e) => setlastname(e.target.value)}
    //                                 required
    //                             />
    //                         </div>
    //                         <div className="password">
    //                             <label>Password</label>
    //                             <input
    //                                 type="password"
    //                                 value={password}
    //                                 onChange={(e) => setpassword(e.target.value)}
    //                                 required
    //                             />
    //                         </div>
    //                         <div className="email">
    //                             <label>Email</label>
    //                             <input
    //                                 type="email"
    //                                 value={email}
    //                                 onChange={(e) => setemail(e.target.value)}
    //                                 required
    //                             />
    //                         </div>
    //                         <div className="phone">
    //                             <label>Phone Number</label>
    //                             <input
    //                                 type="tel"
    //                                 value={phonenumber}
    //                                 onChange={(e) => setphonenumber(e.target.value)}
    //                             />
    //                         </div>
    //                         <div className="vendor">
    //                             <label>Vendor</label>
    //                             <select value={is_vendor} onChange={(e) => setvendor(e.target.value)}>
    //                                 <option value="">Select</option>
    //                                 <option value="yes">Vendor</option>
    //                                 <option value="no">Not Vendor</option>
    //                             </select>
    //                         </div>
                           
    //                     </form>
    //                 </div>
    //         </>
    //     );
    // }
    
    // export default Myform;

    import { useState } from "react";
    import Nav from "../components/nav";
    function Myform (){
        const[name,setname]=useState("");
        const[firstname,setfirstname]=useState("");
        const[lastname,setlastname]=useState("");
        const[password,setpassword]=useState("");
        const[email,setemail]=useState("");
        const[phonenumber,setphonenumber]=useState("");
        const[is_vendor,setvendor]=useState("")
        const submit=(e)=>{
            e.preventDefault();
        const User=()=>{
            const[user,setuser]=useState()
            const getuser=async()=>{
                let url="http://localhost:8000/api/user/"
                const response=await fetch(url)
                setuser(await response.json())
            }
             console.log(User)
              useEffect(()=>{
                getuser()
              },[])
        }

        

        };
        return(
            <>
            <Nav/>

            <div className="h">
                <h1>Create New User</h1>
            </div>


            <form onSubmit={submit}>
                <div className="name">
                    <label>User Name</label>
                    <input type="text" value={name}
                    onChange={(e) =>setname(e.target.value)}/>
                </div>
                <div className="firstname">
                    <label>First Name</label>
                    <input type="text" value={firstname}
                    onChange={(e) =>setfirstname(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label>Last Name</label>
                    <input type="text" value={lastname}
                    onChange={(e)=>setlastname(e.target.value)}/>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password" value={password}
                    onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="emaiil" value={email}
                    onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="phone">
                    <label>Phonenumber</label>
                    <input type="tel" value={phonenumber}
                    onChange={(e)=>setphonenumber(e.target.value)}/>
                </div>
                <div className="vendor">
                    <label>Vendor</label>
                    <select value={is_vendor} onChange={(e)=>setvendor(e.target.value)}>
                    {/* <option value="">-- Select --</option> */}
                    <option value="yes">Vendor</option>
                    <option value="no">Not Vendor</option>
                    </select>
                </div>
                
                <button type="submit">submit</button>
            </form>
        </>
            
        )

    }
    export default Myform

