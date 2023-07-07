interface IReaction {
  likeCount: number
  rocketCount: number
}

const Reaction = ({ likeCount, rocketCount }: IReaction) => {
  return (
    <>
      <div className="flex items-center space-x-1 md:space-x-2">
        <div>
          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#98A5B3"/>
            <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#98A5B3"/>
            <path d="M12 18C14.28 18 16.22 16.34 17 14H7C7.78 16.34 9.72 18 12 18Z" fill="#98A5B3"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#98A5B3"/>
          </svg>
        </div>
        <div className="text-[7px] leading-[10px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 px-1 md:px-2 xl:px-2.5 py-0.5 border border-neutral-30 rounded-full flex items-center bg-[#F7F9FA]">
          <span>👍🏻</span>
          <span className="font-cera-pro-regular ml-0.5">{likeCount}</span>
        </div>
        <div className="text-[7px] leading-[10px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 px-1 md:px-2 xl:px-2.5 py-0.5 border border-neutral-30 rounded-full flex items-center bg-[#F7F9FA]">
          <span>🚀</span>
          <span className="font-cera-pro-regular ml-0.5">{rocketCount}</span>
        </div>
      </div>
    </>
  )
}

export default Reaction
