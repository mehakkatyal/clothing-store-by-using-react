
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
 
function myform(){
    const[cat_name,setcatname]=useState(" ");
    const[cat_pic,setcatpic]=useState(null);
    const{id}=useParams();
    

    useEffect(()=>{
      if(id){
        fetch(`http://localhost:8000/api/category/${id}/`,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          setcatname(data.name);
          
        })
      }

    },[id]);

      const submit = async (e) => {
            e.preventDefault();
            // const userdata={
            //     cat_name,
            //     cat_pic
                
            // };
            const formData = new FormData();
            formData.append("cat_name", cat_name);  
            formData.append("cat_pic", cat_pic);


            const url=id
            ? `http://localhost:8000/api/category/${id}/`
            :"http://localhost:8000/api/category/";
            const method=id?"PUT":"POST";
       
            const response=await fetch(url,{
                method,
                headers:{ 
                "Authorization":`Bearer ${localStorage.getItem('access_token')}`
                },
                body:formData,

            })

            if (response.ok){
              if (method=="POST"){
                alert("category created");
              }else{
              alert("category upadated")
              }
            }else{
              alert("failed to create")
            }
      };
      return(
        <>
        <h1>Add Category</h1>
        <form onSubmit={submit}>
            <label>Add Categoryname </label>
            <input type="text"
            value={cat_name}
            onChange={(e) => setcatname(e.target.value)}></input>
            <label>Category pic</label>
            <input type="file"
            accept="image/*"
            onChange={(e) => setcatpic(e.target.files[0])}></input>




            <button type="submit">{id?"UPDATED":"SUBMIT"}</button>



        </form>
        </>
      )

}
export default myform   