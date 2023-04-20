import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import CartModal from './CartModal';

const Header = ({ item }) => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light py-2 bg-primary">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <img
                        src={urlFor(item.find(obj => obj.name === 'logo').image)}
                        alt={'logo'}
                        className="img-fluid"
                        width={150}
                        height={50}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/products" className="nav-link">
                                Products
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="text-center" onClick={toggleCart}>
                            <img
                                src={urlFor(item.find(obj => obj.name === 'bag').image)}
                                alt="cart"
                                width={30}
                                height={30}
                            />
                            <div className="">{0}</div>
                        </div>
                    </div>
                </div>
            </div>
            <CartModal show={showCart} onHide={toggleCart} />
        </nav>
    );
};

export default Header;
