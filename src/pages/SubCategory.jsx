import { useParams } from 'react-router-dom';


const SubCategory = () =>{
    
    const {id} = useParams()

    
    return <h1>Sub Category {id}</h1>
}


export default SubCategory