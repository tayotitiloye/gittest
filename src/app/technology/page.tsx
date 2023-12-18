import Technology from '@/components/Technology'
import React, { useState } from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/technology')

  if (!res.ok) {
    throw new Error('data fetch failed')
  }

  return res.json()
}
async function page() {

    const data = await getData()

  return (
    <div>
      <Technology data={data} />
      </div>
    )   
}

export default page