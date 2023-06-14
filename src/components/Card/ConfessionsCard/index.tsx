import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { type IConfessionCard } from '../../../interfaces/IConfessionCard'
import { Link } from 'react-router-dom'

const ConfessionCard = ({ title, description, image, url }: IConfessionCard) => {
  return (
    <>
      <div className="relative">
        <Link to={url ?? ''} className="w-full h-full absolute"></Link>
        <div className="w-full h-[353px] xl:h-[440px] rounded-2xl bg-gray-400 overflow-hidden">
          <LazyLoadImage
            src={image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="mt-6">
          <p className="text-lg text-neutral-100 font-cera-pro-medium  truncate">{title}</p>
          <p className="text-sm text-neutral-60 font-cera-pro-regular mt-2">{description}</p>
        </div>
      </div>
    </>
  )
}

export default ConfessionCard
