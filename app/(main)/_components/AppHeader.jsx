import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

export default function AppHeader() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={100}
        height={100}
      />
      <UserButton/>
    </div>
  )
}
