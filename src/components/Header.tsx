import React from 'react'
import Navbar from './navbar'
import { ConnectKitButton } from 'connectkit'

export const Header = () => {
  return (
      <div className='flex justify-between px-24 items-center'>
          <Navbar />
          <ConnectKitButton />
    </div>
  )
}