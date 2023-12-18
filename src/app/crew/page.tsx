
import Crew from '@/components/Crew'
import NavbarSpace from '@/components/NavbarSpace'
import { crew, crewType } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/crew')

  if (!res.ok) {
    throw new Error('data fetch failed')
  }

  return res.json()

}
async function page() {


  const data:crewType = await getData()

  return (
    <div>
      <Crew data={ data} />
    </div>
  )
}

export default page