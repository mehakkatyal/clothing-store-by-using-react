import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Subcategory=()=>{
    const [Subcategory,setSubcategory]=useState([])
    const {id} = useParams()

    const getSubcategory=async()=>{
        // let url="http://localhost:8000/api/subcategory_by_category/"
         let url= `http://localhost:8000/api/subcategory_by_category/${id}`
       
        const response= await fetch(url)
        setSubcategory(await response.json())
    }
    console.log(Subcategory)
    useEffect(()=>{
        getSubcategory()
      },[])
      return(
        <>
        {Subcategory.map((e,index)=>{
            return<>
                  {/* <Link to={`/Product/${e.id}`}>
                    <h2>{e.sub_cat_name}</h2>
                  </Link> */}
                  <Link to={`/Product/${e.id}`}>
                   <h2>{e.sub_cat_name}</h2>
                   </Link>
                <div className='img'>
                    <img src={`http://localhost:8000${e.sub_cat_pic}`}
                    alt={e.sub_cat_name}
                    style={{ width: '200px', height: 'auto' }}/>       
                </div>
            </>

        }
    )}
        </>

      )

   
}
export default Subcategory








