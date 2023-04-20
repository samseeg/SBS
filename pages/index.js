import Image from 'next/image'
import { Inter } from 'next/font/google'
import { client, urlFor } from '../lib/client'
import Product from '../components/Product'
import Header from '../components/Header'
import Modal from 'react-bootstrap/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products, siteImages}) {
  return (
    <>
      <Header item={siteImages} />
      <div className="container my-5">
        <h1 className="text-center mb-5">Pictures by Sheiyenne</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products?.map((product) => (
            <div key={product._id} className="col">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const siteImageQuery = '*[_type == "siteImages"]';
  const siteImages = await client.fetch(siteImageQuery);

  return {
    props: { products, siteImages }
  }
}