
import Destination from '@/components/Destination'
import { destinationsType } from '@/data'

import React from 'react'


async function getData() {
   // const res = await fetch('http://localhost:3000/api/destination')
    const res = await fetch(`${process.env.URL_LINK}/api/destination`)

    if (!res.ok) {
        throw new Error('unable to fetch data')
    }

    return res.json()
}





async function page() {

    const data:destinationsType = await getData()
  return (
      <div>
        
          <Destination data2={data} />
          
    </div>
  )
}

export default page