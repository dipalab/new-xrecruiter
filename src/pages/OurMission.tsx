import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import HeaderTheme from '../utils/constants/variable/HeaderTheme'
import BaseLayout from '../layouts/BaseLayout'
import { Hero, Vision, Mission, OurValue, WhyJoin, Faq } from '../parts/OurMission'

const OurMission = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Our Mission</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout headerTheme={HeaderTheme.DARK}>
          <Hero />
          <Vision />
          <Mission />
          <OurValue />
          <WhyJoin />
          <Faq />
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default OurMission
