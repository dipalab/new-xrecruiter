import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import HeaderTheme from '../utils/constants/variable/HeaderTheme'
import BaseLayout from '../layouts/BaseLayout'
import { Hero } from '../parts/Community'

const Community = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Community</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout headerTheme={HeaderTheme.LIGHT}>
          <Hero />
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default Community
