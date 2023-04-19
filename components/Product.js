import React from 'react'

import { urlFor } from '@/lib/client'

const Product = ({product: {name, image, details, price}}) => {
  return (
      <div>
          <div className='product-card'>
              <img
                  src={urlFor(image && image[0])}
                  alt='product'
                  width={250}
                  height={250}
                  className='product-image' />
              <p className='product-name'>{name}</p>
              <p className='product-price'>${price}</p>
              <p className='product-details'>{details}</p>
          </div>
    </div>
  )
}

export default Product