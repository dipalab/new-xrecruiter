import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import BaseLayout from '../layouts/BaseLayout'
import { Hero, Work, Recruit, Earn, Future, Pioneer, OurStory, Peak, Connect, Testimonial } from '../parts/Home'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Home</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout>
          <Hero />
          <Work />
          <Recruit />
          <Earn />
          <Future />
          <Pioneer />
          <OurStory />
          <Peak />
          <Connect />
          <Testimonial />
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default Home
