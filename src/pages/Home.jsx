// const Home=()=>{
//      return <>
//        <h1>Welcome to the first page </h1>;
//     </>
// }
// export default Home
import Nav from "../components/nav";
import React  from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import './Home.css'



const Category=()=>{
  const[Category,setCategory]=useState([])

  const getCategory=async()=>{
    let url="http://localhost:8000/api/category/"
    const response=await fetch(url)
    setCategory(await response.json())
  }
  console.log(Category)
  useEffect(()=>{
    getCategory()
  },[])
  return(
    <>
     <Nav/>
      {/* <h1 onClick={()=>getCategory()}>Category</h1> */}
      <h1 className="cat">Category</h1>
      {Category.map((e,index)=>{
        return<>
        <div className="all">
          <div className="catname">
            <Link to={`/subcategory/${e.id}`}>
              <h2>{e.cat_name}</h2>
            </Link>
            
           {/*  
           <h2>{e.id}</h2> */}
            {/* <h2>{e.cat_pic}</h2> */}
          </div>
          <div className="catpic">
            <img 
              src={e.cat_pic} 
              alt={e.cat_name} 
              style={{ width: '200px', height: 'auto' }}/>
          </div>
        </div>
        </>
    }
    )}
  </>
  )
}
export default Category
