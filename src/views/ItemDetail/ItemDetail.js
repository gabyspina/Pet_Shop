
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


import {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { CartContext } from "../../components/CartContext/CartContext";

import {collection, where, query, getDocs, documentId} from 'firebase/firestore'
import {db} from '../../Firebase/Firebase'

import ItemCount from '../../components/ItemCount/ItemCount';


const ItemDetail = () => {

  const {addItem} = useContext(CartContext);

  const [add, setAdd] = useState(false);

  const [item, setItem] = useState([]);

  console.log()  
  const {id} = useParams();  


  // obetener productos
useEffect(() => {
  const getItem = async () => {
    const q = query(collection(db, 'food'),where(documentId(), '==', id));
    const docs = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });
    setItem(docs);

  };
  getItem();

}, [id]);

  const handleAdd = (qty) => {
    
    
    addItem(qty);
    console.log('items agregados', qty);
    setAdd(item, qty);
  }

  return (

    <>
    <div className="items-class">
      
      {item.map((item) =>{
        return(
      

    <Card sx={{ maxWidth: 345 , margin: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" component="div">
            {item.detail}
          </Typography>
         
          <Typography variant="h6" rows="number">
            {`$ ${item.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>

      <div className='contenedor'>

          <ItemCount stock={5} initial={1} item={item} onAdd={handleAdd} />

      </div>

      <div>
          {
            add ? <h1>Added</h1> 
            :

            <Link to='/cart'>
            
                        
        <Button variant="contained" color="success">
        Finalizar Compra
      </Button>

            
            </Link>
}

      </div>
    </Card>

              ) 
      })}

      
    </div>
    </>
  )
}

export default ItemDetail
