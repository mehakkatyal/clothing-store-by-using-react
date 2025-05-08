// import { useState,useEffect} from "react";
// import { useParams } from "react-router-dom";


// const Productdetail=()=>{
//     const[product,setproduct]=useState([])
//     const{id}=useParams()
//     const getProductdetail=async()=>{
//         let url=`http://localhost:8000/api/product_by_subacategory/${id}`
//         const respose=await fetch(url)
//         setproduct (await  respose.json())
//     }
//     console.log(Productdetail)
//     useEffect(()=>{
//             getProductdetail()
//           },[])
//     return(
//         <>
       
//             {product.product_name}
//             <h1>welcome to the product detail page {id}</h1>
//        </>
//     );
// }
// export default Productdetail;
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//     const [product, setProduct] = useState(null);
//     const { id } = useParams();

//     const getProductDetail = async () => {
//         const response = await fetch(`http://localhost:8000/api/product/${id}/`);
//         const data = await response.json();
//         setProduct(data);
//     };

//     useEffect(() => {
//         getProductDetail();
//     }, [id]);

//      if (!product) return <p>Loading...</p>;

//     return (
//         <>
//             <h1>{product.product_name}</h1>
//             <p>{product.product_dis}</p>
//             <p>Price: ₹{product.product_price}</p>
            
//         </>
//     );
// };

// export default ProductDetail;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const getProductDetail = async () => {
        const response = await fetch(`http://localhost:8000/api/product/${id}/`);
        const data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getProductDetail();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.product_name}</h1>
            <p>{product.product_dis}</p>
            <p>Price: ₹{product.product_price}</p>

            <h3>Product Images:</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.images && product.images.length > 0 ? (
                    product.images.map((img) => (
                        <img
                            key={img.id}
                            src={img.image}
                            alt="Product"
                            style={{ width: "150px", height: "auto", borderRadius: "8px" }}
                        />
                    ))
                ) : (
                    <p>No images available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;




