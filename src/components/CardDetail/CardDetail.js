import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';


export default function MultiActionAreaCard({item}) {
  return (
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
          <Typography variant="body2" component="text.secundary">
            {item.detail}
          </Typography>
         
          <Typography variant="h6" rows="number">
            {`$ ${item.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
            
    </Card>
  );
}
