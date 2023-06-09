import TestimoniTabName from '../variable/TestimoniTabName'
import IndustryTalentAvaImage from '../../../assets/images/home/testimonial/industry-talent-ava.png'
import IndustryTalentLogoImage from '../../../assets/images/home/testimonial/industry-talent-logo.svg'
import IndustryTalentWhiteLogoImage from '../../../assets/images/home/testimonial/industry-talent-white-logo.svg'
import YakkaSolutionAvaImage from '../../../assets/images/home/testimonial/yakka-solutions-ava.png'
import YakkaSolutionLogoImage from '../../../assets/images/home/testimonial/yakka-solutions-logo.svg'
import YakkaSolutionWhiteLogoImage from '../../../assets/images/home/testimonial/yakka-solutions-white-logo.svg'
import HPeopleAvaImage from '../../../assets/images/home/testimonial/h-people-ava.png'
import HPeopleLogoAvaImage from '../../../assets/images/home/testimonial/h-people-logo.svg'
import HPeopleWhiteLogoImage from '../../../assets/images/home/testimonial/h-people-white-logo.svg'

const TestimoniTabList = [
  {
    id: TestimoniTabName.INDUSTRY_TALENT,
    brand: IndustryTalentWhiteLogoImage
  },
  {
    id: TestimoniTabName.YAKKA_SOLUTIONS,
    brand: YakkaSolutionWhiteLogoImage
  },
  {
    id: TestimoniTabName.H_PEOPLE,
    brand: HPeopleWhiteLogoImage
  }
]

const TestimoniList = [
  {
    id: TestimoniTabName.INDUSTRY_TALENT,
    title: 'Xrecruiter changed my life, thank you XR!',
    body: '<p>I recently used the services of Xrecruiter for setting up my business and was thoroughly impressed with their level of expertise and dedication. From marketing to processes and support, Xrecruiter was able to provide me with the tools and guidance necessary to get my business up and running smoothly.</p> <p class="mt-4 md:mt-6">I would highly recommend Xrecruiter to anyone in Recruitment considering starting their own agency!!! :)</p>',
    author_name: 'Krystal Smithers',
    author_position: 'Director',
    author_ava: IndustryTalentAvaImage,
    brand: IndustryTalentLogoImage
  },
  {
    id: TestimoniTabName.YAKKA_SOLUTIONS,
    title: "Starting my agency has been seamless with XR. I'm excited to build something special",
    body: "<p>“It's been great working with xrecruiter and being able to start Yakka Solutions with them, the onboarding process has been seamless and I'm really excited to be building something special with them.”</p>",
    author_name: 'Jack Creith',
    author_position: 'Director',
    author_ava: YakkaSolutionAvaImage,
    brand: YakkaSolutionLogoImage
  },
  {
    id: TestimoniTabName.H_PEOPLE,
    title: 'Xrecruiter changed my life, thank you XR!',
    body: '<p>A next generation online discussion forum. It has had a profound impact on the community-building aspect of the course. It is far more modern, user-friendly, interactive, and multi-faceted than any other platform out there, and we are making it the home of our student community.</p>',
    author_name: 'Sam Hope & Jory Humphries',
    author_position: 'Director',
    author_ava: HPeopleAvaImage,
    brand: HPeopleLogoAvaImage
  }
]

export { TestimoniTabList, TestimoniList }
