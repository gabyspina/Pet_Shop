import {useState, useEffect} from 'react'
import './ItemsContainer.css'
import Card from '../../components/Card/Card'

import { Link } from 'react-router-dom'

// Firebase

import {collection, query, getDocs} from 'firebase/firestore'
import {db} from '../../Firebase/Firebase'

const ItemsContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, 'food'));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });
      setItems(docs);

    };
    getItems();

  }, []);

  return(
    <div className="items-class">
      
      {items.map((item) =>{
        return(
      <div className='contenedor'>
          <div >
            <Link to={`/detail/${item.id}`}>
                
                <Card item={item} key={item.id}/>

                
            </Link>

          </div>
      </div>

              ) 
      })}

      
    </div>
  );
  }

export default ItemsContainer