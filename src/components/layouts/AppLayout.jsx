import React from 'react'

export default function AppLayout({children, appbar}) {
  return (
    <>
        <header className='px-6 sm:px-6 md:px-8 lg:px-20 xl:px-40'>
          {appbar}
        </header>
        <main className="p-10 min-h-screen px-6 sm:px-6 md:px-8 lg:px-20 xl:px-40">
          {children}
        </main>
    </>
  )
}
