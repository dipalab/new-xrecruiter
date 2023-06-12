import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import BaseLayout from '../layouts/BaseLayout'
import { Hero, Vision } from '../parts/OurMission'

const OurMission = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Our Mission</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout>
          <Hero />
          <Vision />
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default OurMission
