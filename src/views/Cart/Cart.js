import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

import {collection, addDoc} from '@firebase/firestore';
import {db} from '../../Firebase/Firebase'

import './Cart.css';
import IconAlerts from '../../components/Alert/Alert';
import { CartContext } from "../../components/CartContext/CartContext";

const initialState = {
  name: '',
  lastName: '',
  city: '',
}


const Cart = () =>{

  const [item, setItems] = useState(CartContext);
  const [values, setValues] = useState(initialState);
  
  console.log( ' cart',item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const [purchaseID, setPurchaseID] = useState('');
  

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const docRef  = await addDoc(collection(db, 'pedido'),{
      name: values.name,
      lastName: values.lastName,
      city: values.city
    });
  console.log('El ID de la  transacción es:', docRef.id);
    setPurchaseID(docRef.id);
    setValues (initialState);
  }

  return (

    <>
    <h1> Carrito </h1>
    
    <Box className="cart-container" onSubmit={onSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="on"
      
   >
      <TextField
        id="outlined-name"
        label="Nombre"
        value={values.name}
        onChange={handleChange}
        name="name"
      />
      <TextField
        id="outlined-name"
        label="Apellido"
        value={values.lastName}
        onChange={handleChange}
        name="lastName"
      />
      
      <TextField
        id="outlined-mail"
        label="Ciudad"
        value={values.city}
        onChange={handleChange}
        name="city"
      />

      <Stack spacing={2} direction="row">
        <Button variant="contained" type="submit">Enviar</Button>

      </Stack>

        {purchaseID && <IconAlerts message={`El ID de la transacción es: ${purchaseID}`} />}
    </Box>
  </>
  );
}

export default Cart;