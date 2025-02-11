import React from 'react'
import { ProductType } from '../../app/models/product'
import { Box } from '@mui/material'
import { ProductCard } from './ProductCard'

type ProductListProps = {
  products: ProductType[]
}

export const ProductList = ({products}: ProductListProps) => {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center'}}>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </Box>
  )
}
