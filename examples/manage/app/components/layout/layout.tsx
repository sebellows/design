import React from 'react'
import {Navbar} from '..'

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
