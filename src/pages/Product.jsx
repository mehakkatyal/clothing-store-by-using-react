import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"

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
          {Productlist.map((product, index) => (
            <div key={index}>
              <Link to={`/productdetail/${product.id}`}>
              <h2>{product.product_name}</h2>
              </Link>
              <h3>{product.product_price}</h3>
              {product.images && product.images.length > 0 && (
                <img
                  src={`http://localhost:8000${product.images[0].image}`}
                  alt="Product"
                  style={{ width: "200px", height: "auto" }}
                />
              
    )}
  </div>
))}
</>
);
}
export default Product


