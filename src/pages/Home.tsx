import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import HeaderTheme from '../utils/constants/variable/HeaderTheme'
import BaseLayout from '../layouts/BaseLayout'
import { Hero, Work, Recruit, Earn, Future, Pioneer, OurStory, Peak, Connect, Testimonial, PartnerSay, Building, BetterTogether } from '../parts/Home'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Home</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout headerTheme={HeaderTheme.DARK}>
          <Hero />
          <Work />
          <Recruit />
          <Earn />
          <Building />
          <BetterTogether />
          <Future />
          <Pioneer />
          <OurStory />
          <Peak />
          <Connect />
          <Testimonial />
          <PartnerSay />
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default Home
