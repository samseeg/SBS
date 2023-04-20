import React from 'react'
import { urlFor } from '@/lib/client'

const Product = ({ product: { name, image, details, price } }) => {
    // console.log(urlFor(image[0]))
    return (
        <div className="card mb-3 h-100 d-flex flex-column" style={{ maxWidth: '540px' }}>
            <div className="row g-0 flex-grow-1">
                <div className="col-md-12 col-lg-4">
                    <img
                        src={urlFor(image && image[0])}
                        alt="product"
                        className="card-img-top h-100 w-100"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-12 col-lg-8">
                    <div className="card-body d-flex flex-column h-100">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            <small className="text-muted">${price}</small>
                        </p>
                        <button className="btn btn-primary mt-auto">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default Product
