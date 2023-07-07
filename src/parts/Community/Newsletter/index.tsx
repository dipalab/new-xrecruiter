import { Button } from '../../../components'

const Newsletter = () => {
  return (
    <div className="bg-white ">

      <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-0 py-16 md:py-[88px] xl:py-[120px] xl:pb-[104px]">
        <div className="bg-[#00081D] relative rounded-3xl overflow-hidden">
          <div className="w-full h-full flex justify-between absolute">
            <svg className="w-[133px] h-[210px]" viewBox="0 0 113 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-58.9823 16.7572L96.9873 107.082M66.971 159.234L-88.9986 68.9095M-88.9986 107.082L66.971 16.7572M96.9873 68.9095L-58.9823 159.234M34.0023 178.324C34.0023 194.952 20.5635 208.432 3.98598 208.432C-12.5916 208.432 -26.0303 194.952 -26.0303 178.324C-26.0303 161.695 -12.5916 148.215 3.98598 148.215C20.5635 148.215 34.0023 161.695 34.0023 178.324ZM34.0023 -2.32535C34.0023 14.303 20.5635 27.7829 3.98598 27.7829C-12.5916 27.7829 -26.0303 14.303 -26.0303 -2.32535C-26.0303 -18.9537 -12.5916 -32.4336 3.98598 -32.4336C20.5635 -32.4336 34.0023 -18.9537 34.0023 -2.32535ZM112 133.162C112 149.79 98.5612 163.27 81.9837 163.27C65.4061 163.27 51.9674 149.79 51.9674 133.162C51.9674 116.533 65.4061 103.054 81.9837 103.054C98.5612 103.054 112 116.533 112 133.162ZM-43.9674 42.8378C-43.9674 59.4661 -57.4061 72.946 -73.9837 72.946C-90.5612 72.946 -104 59.4661 -104 42.8378C-104 26.2095 -90.5612 12.7296 -73.9837 12.7296C-57.4061 12.7296 -43.9674 26.2095 -43.9674 42.8378ZM112 42.8378C112 59.4661 98.5612 72.946 81.9837 72.946C65.4061 72.946 51.9674 59.4661 51.9674 42.8378C51.9674 26.2095 65.4061 12.7296 81.9837 12.7296C98.5612 12.7296 112 26.2095 112 42.8378ZM-43.9674 133.162C-43.9674 149.79 -57.4061 163.27 -73.9837 163.27C-90.5612 163.27 -104 149.79 -104 133.162C-104 116.533 -90.5612 103.054 -73.9837 103.054C-57.4061 103.054 -43.9674 116.533 -43.9674 133.162Z" stroke="url(#paint0_linear_36163_554)" strokeWidth="1.54286"/>
              <defs>
                <linearGradient id="paint0_linear_36163_554" x1="-103.213" y1="-31.6953" x2="100.429" y2="196.681" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1C5BFC"/>
                  <stop offset="1" stopColor="#1C5BFC" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <svg className="w-[128px] h-[197px] mt-[245px] md:mt-[108px]" viewBox="0 0 128 197" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M202.854 59.8146L18.7233 166.448M54.1593 228.017L238.29 121.383M238.29 166.448L54.1593 59.8146M18.7233 121.383L202.854 228.017M93.0806 250.553C93.0806 270.183 108.946 286.097 128.517 286.097C148.087 286.097 163.952 270.183 163.952 250.553C163.952 230.922 148.087 215.008 128.517 215.008C108.946 215.008 93.0806 230.922 93.0806 250.553ZM93.0806 37.2866C93.0806 56.9173 108.946 72.8311 128.517 72.8311C148.087 72.8311 163.952 56.9173 163.952 37.2866C163.952 17.656 148.087 1.74219 128.517 1.74219C108.946 1.74219 93.0806 17.656 93.0806 37.2866ZM0.999998 197.237C0.999998 216.867 16.8652 232.781 36.4359 232.781C56.0067 232.781 71.8719 216.867 71.8719 197.237C71.8719 177.606 56.0067 161.692 36.4359 161.692C16.8652 161.692 0.999998 177.606 0.999998 197.237ZM185.128 90.6043C185.128 110.235 200.993 126.149 220.564 126.149C240.135 126.149 256 110.235 256 90.6043C256 70.9736 240.135 55.0598 220.564 55.0598C200.993 55.0598 185.128 70.9736 185.128 90.6043ZM0.999998 90.6043C0.999998 110.235 16.8652 126.149 36.4359 126.149C56.0067 126.149 71.8719 110.235 71.8719 90.6043C71.8719 70.9736 56.0067 55.0598 36.4359 55.0598C16.8652 55.0598 0.999998 70.9736 0.999998 90.6043ZM185.128 197.237C185.128 216.867 200.993 232.781 220.564 232.781C240.135 232.781 256 216.867 256 197.237C256 177.606 240.135 161.692 220.564 161.692C200.993 161.692 185.128 177.606 185.128 197.237Z" stroke="url(#paint0_linear_36163_555)" strokeWidth="1.82143"/>
              <defs>
                <linearGradient id="paint0_linear_36163_555" x1="255.07" y1="2.61377" x2="14.6607" y2="272.224" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF47A7"/>
                  <stop offset="1" stopColor="#FF47A7" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative p-6 sm:p-8 md:p-12 xl:p-16 lg:flex justify-between items-center">
            <div className="text-left md:text-center lg:text-left w-full lg:max-w-[388px] xl:max-w-[450px]">
              <h2 className="text-[32px] leading-[40px] xl:text-[40px] xl:leading-[56px] font-cera-pro-medium text-white">Bi-Weekly Confessions Newsletter</h2>
              <p className="mt-4 text-base md:text-sm xl:text-base font-cera-pro-regular text-neutral-60">Time poor recruiters can get up to speed quickly with our 2 minute read, confessions podcast summary newsletter!</p>
            </div>
            <div className="relative mx-auto lg:mx-0 md:w-[400px] xl:w-[442px] mt-10 lg:mt-0">
              <input
                type="text"
                name="account-number"
                id="account-number"
                className="block font-cera-pro-regular w-full rounded-xl md:rounded-[13px] border-0 py-[15px] md:py-[19px] px-5 pr-10 text-neutral-100 ring-0 placeholder:text-neutral-60 focus:ring-0 text-base"
                placeholder="Your work email"
              />
              <div className="md:absolute inset-y-0 right-0 flex items-center md:pr-1 mt-3 md:mt-0">
                <Button classNames="!w-full md:!w-auto">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
