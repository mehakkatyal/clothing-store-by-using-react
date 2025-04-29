import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const Product=()=>{
    const [Productlist,setProductlist]=useState([])
    const{id}=useParams()
    const  getProduct= async()=>{
        let url=`http://localhost:8000/api/product_by_subacategory/${id}`
        const response=await fetch(url)
        setProductlist(await response.json())
}

console.log(Product)
useEffect(()=>{
        getProduct()
      },[])
      return(
        <>
        {Productlist.map((e,index)=>{
            return<>
            <h2>{e.product_name}</h2>
            </>
        }
    )}
        </>
      )
}
export default Product


