import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { client, urlFor } from '../lib/client'
import Product from '../components/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}