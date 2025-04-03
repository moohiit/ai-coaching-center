import Image from 'next/image'
import React from 'react'

export default function AppHeader() {
  return (
    <div>
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={200}
        height={200}
      />
    </div>
  )
}
