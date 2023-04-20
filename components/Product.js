import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/client'

const Product = ({ product: { name, image, details, price } }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4 col-sm-6 col-lg-4">
                    <img
                        src={urlFor(image && image[0])}
                        alt='product'
                        className='card-img-top'
                    />
                </div>
                <div className="col-md-8 col-sm-6 col-lg-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><small className="text-muted">${price}</small></p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
