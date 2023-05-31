import { Helmet } from 'react-helmet'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import BaseLayout from '../layouts/BaseLayout'

const Community = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XRecruiter | Community</title>
      </Helmet>
      <LazyLoadComponent>
        <BaseLayout>
        </BaseLayout>
      </LazyLoadComponent>
    </>
  )
}

export default Community
