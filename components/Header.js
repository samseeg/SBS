import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
      <div className='headerContainer'>
          <div className='logoContainer'>
              <Link href="/">
                  <a>
                      <img src="/logo.png" alt="Logo" />
                  </a>
              </Link>
          </div>
          <div className='navigationContainer'>
              <Link href="/">
                  <div className='navigationLink'>Home</div>
              </Link>
              <Link href="/products">
                  <div className='navigationLink'>Products</div>
              </Link>
              <Link href="/contact">
                  <div className='navigationLink'>Contact Us</div>
              </Link>
          </div>
          <div className='cartContainer'>
              <img className="fa fa-shopping-cart"
                  src='#'
                  alt='cart'
              />
              <div className='itemCount'>0</div>
          </div>
      </div>
  )
}

export default Header