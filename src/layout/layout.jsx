import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

function layout({children}) {
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>
  )
}

export default layout