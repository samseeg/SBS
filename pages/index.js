import Image from 'next/image'
import { Inter } from 'next/font/google'
import { client, urlFor } from '../lib/client'
import Product from '../components/Product'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products, siteImages}) {
  return (
    <>
      <Header item={siteImages} />
      {products?.map((product) => <Product key={product._id} product={product} />)}
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