"use client"; // to make this file as client component

import React from 'react'
import Link from 'next/link';
import ProductCard from './components/ProductCard';

const page = () => {

  return (
    <div>

      <button onClick={() => {alert("Clicked!")}} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Click Me</button>
      <p>The button above is without style by default.</p>
      <Link href="/users">Users</Link>
      <ProductCard />
      
    </div>
  )
}

export default page