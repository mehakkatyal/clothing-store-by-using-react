// const Home=()=>{
//      return <>
//        <h1>Welcome to the first page </h1>;
//     </>
// }
// export default Home
// import Nav from "../components/nav";
// import React  from "react";
// import { Link } from "react-router-dom";
// import { useEffect,useState } from "react";1
// import './Home.css'


// const [user,setuser]=useState(null);
//    useEffect(()=>{
//     const userdata=localStorage.getItem("user");
//       if (userdata) {
//         setuser(JSON.parse(userdata));
//       }
//    },[]);


// const Category=()=>{
//   const[Category,setCategory]=useState([])

//   const getCategory=async()=>{
//     let url="http://localhost:8000/api/category/"
//     const response=await fetch(url)
//     setCategory(await response.json())
//   }
//   console.log(Category)
//   useEffect(()=>{
//     getCategory()
//   },[])
//   return(
//     <>
//      <Nav/>
//       {/* <h1 onClick={()=>getCategory()}>Category</h1> */}
       
 
//             <h1 className="cat">Category</h1>
//             {Category.map((e,index)=>{
//               return<>
//               <div className="all">
//                 <div className="catname">
//                   <Link to={`/subcategory/${e.id}`}>
//                     <h2>{e.cat_name}</h2>
//                   </Link>
//                   {user?.is_vendor &&(
//                     <>
//                       <button><Link to="Addcategory">Add category</Link></button><br></br>
//                       <button><Link to={`Addcategory/${e.id}`}>Update Category</Link></button>

//                     </>
//                   )}
                
                  
               
//                 </div>
//                 <div className="catpic">
//                   <img 
//                     src={e.cat_pic} 
//                     alt={e.cat_name} 
//                     style={{ width: '200px', height: 'auto' }}/>
//                 </div>
//               </div>
        
//       </>
//     }
//     )}
//   </>
//   )
// }


import Nav from "../components/nav";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Category = () => {
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState([]);

  // Load user from backend using token stored in localStorage
  useEffect(() => {
    const fetchUser = async () => {
      // Get the access token from localStorage
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) {
        try {
          // Make a request to the backend to get the logged-in user's details
          const userRes = await fetch("http://localhost:8000/api/user/me/", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (userRes.ok) {
            const userData = await userRes.json();
            setUser(userData);
            console.log("User data:", userData); // Log user data for debugging
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      } else {
        console.error("No access token found in localStorage");
      }
    };

    fetchUser();
  }, []);

  // Fetch categories from API
  const getCategory = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/category/");
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Nav />
      <h1 className="cat">Category</h1>
      {category.length === 0 ? (
        <p>No categories available</p>
      ) : (
        category.map((e, index) => (
          <div key={index} className="all">
            <div className="catname">
              <Link to={`/subcategory/${e.id}`}>
                <h2>{e.cat_name}</h2>
              </Link>

              {/* Check if user is a vendor */}
              {user?.is_vendor && (
                <>
                  <button>
                    <Link to="/Addcategory">Add Category</Link>
                  </button>
                  <br />
                  <button>
                    <Link to={`/Addcategory/${e.id}`}>Update Category</Link>
                  </button>
                </>
              )}
            </div>

            <div className="catpic">
              <img
                src={e.cat_pic}
                alt={e.cat_name}
                style={{ width: '200px', height: 'auto' }}
              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Category;
