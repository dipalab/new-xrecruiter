import SetUpImage from '../../../assets/images/home/recruit/setup.svg'
import BrandingImage from '../../../assets/images/home/recruit/branding.svg'
import TechnologyImage from '../../../assets/images/home/recruit/technology.svg'
import ResourcesImage from '../../../assets/images/home/recruit/resources.svg'
import AdminImage from '../../../assets/images/home/recruit/admin.svg'

const RecruitList = [
  {
    id: 1,
    title: 'Set Up',
    description: 'The start of the process - We hold your hand and walk you through how to set your agency up, what structure and processes need to be in place to ensure a smooth launch',
    features: [
      'Business Registration',
      'Tax Set up and compliance',
      'Corporate Structure',
      'Domain Set up',
      'Hosting, Storage & Servers',
      'Business Banking'
    ],
    image_url: SetUpImage
  },
  {
    id: 2,
    title: 'Branding & Marketing',
    description: 'The exciting stuff - we bring your vision to life. Our designers help you create a breathtaking agency so far ahead of the competition you’ll feel extremely confident representing yourself.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Social Media Templates',
      'Branded Job Ads',
      'Website Design',
      'Branded Documents'
    ],
    image_url: BrandingImage
  },
  {
    id: 3,
    title: 'Technology',
    description: "We provide our network with the world's best technology stack. Big agencies struggle to adopt the fast past tech environment and small agencies are under resourced to afford it - you get it all.",
    features: [
      'A.I Powered CRM',
      'Email Tracking Software',
      'Outbound Prospecting Automation',
      'Branded Digital Resumes',
      'Over 10 million candidates in your database',
      'Analytics Dashboard for performance'
    ],
    image_url: TechnologyImage
  },
  {
    id: 4,
    title: 'Resources',
    description: "All resources are provided to your new agency on day 1. Don't fall for predatory supplier agreements or long-term contracts - simply plug in and get full access to everything you need.",
    features: [
      'LinkedIn Recruiter license',
      'LinkedIn Job Slots',
      'Premium Job Board Ads',
      'Unlimited Calls & Texts',
      'Contact Finder Credits',
      'Unlimited Campaigns'
    ],
    image_url: ResourcesImage
  },
  {
    id: 5,
    title: 'Admin',
    description: 'No admin required to run your agency - we handle everything. Simply make a placement in your CRM and we will take care of the rest.',
    features: [
      'Invoicing clients',
      'Contractor Management',
      'Payroll Financing',
      'Debt Collection',
      'Cashflow management',
      'Accounts Payable & Receivable'
    ],
    image_url: AdminImage
  }
]

export default RecruitList
