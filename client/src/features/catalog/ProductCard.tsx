import React from 'react'
import { ProductType } from '../../app/models/product'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: ProductType
}

export const ProductCard = ({product}: ProductCardProps) => {
  return (
    <Card 
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia 
        sx={{
          height: 240, backgroundSize: 'cover',
        }}
        image={`${product.pictureUrl}`}
        title={product.name}
      />
      <CardContent>
        <Typography variant="subtitle2" sx={{textTransform: 'uppercase'}}>
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{color: 'primary.main'}}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button>Add To Cart</Button>
        <Link to={`/catalog/${product.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
