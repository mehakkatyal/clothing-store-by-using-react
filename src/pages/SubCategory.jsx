import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/nav';
import './subcategory.css';

const Subcategory = () => {
  const [Subcategory, setSubcategory] = useState([]);
  const { id } = useParams();

  const getSubcategory = async () => {
    const url = `http://localhost:8000/api/subcategory_by_category/${id}`;
    const response = await fetch(url);
    setSubcategory(await response.json());
  };

  useEffect(() => {
    getSubcategory();
  }, []);

  return (
    <>
      <Nav />
      <div className="all">
        {Subcategory.map((e, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img
                src={`http://localhost:8000${e.sub_cat_pic}`}
                alt={e.sub_cat_name}
              />
            </div>
            <div className="name">
              <Link to={`/Product/${e.id}`}>
                <h2>{e.sub_cat_name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subcategory;
