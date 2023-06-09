import AOS from 'aos'
import 'aos/dist/aos.css'

import { type IBaseLayout } from '../interfaces/IBaseLayout'
import Footer from '../parts/Footer'
import Header from '../parts/Header'

const BaseLayout = ({ children }: IBaseLayout) => {
  AOS.init({
    once: true
  })

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
