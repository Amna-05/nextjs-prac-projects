'use client'
import React from 'react'
import ContextProvider from './ContextProvider'

function Providers({children}) {
  return (
    <ContextProvider>
  {children}
      </ContextProvider>
  )
}

export default Providers