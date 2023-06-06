const CardName = (data: object | any) => {
  return (
    <>
      <div className="text-center w-full">
        <p className="text-base lg:text-2xl text-neutral-100 font-cera-pro-medium">{ data.name }</p>
        <a href={data.linkedin} target="_blank" className="flex items-center justify-center mt-2" rel="noreferrer">
          <p className="text-sm lg:text-base text-neutral-100 font-cera-pro-regular mr-1">Follow <span className="hidden sm:block">{ data.name }</span> on</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.336 18.339H15.671V14.162C15.671 13.166 15.651 11.884 14.281 11.884C12.892 11.884 12.68 12.968 12.68 14.089V18.339H10.014V9.75H12.574V10.92H12.609C12.967 10.246 13.837 9.533 15.137 9.533C17.837 9.533 18.337 11.311 18.337 13.624L18.336 18.339ZM7.004 8.575C6.80056 8.57526 6.59906 8.53537 6.41106 8.45761C6.22307 8.37984 6.05227 8.26574 5.90846 8.12184C5.76465 7.97793 5.65065 7.80706 5.57301 7.61901C5.49537 7.43097 5.4556 7.22944 5.456 7.026C5.4562 6.71983 5.54718 6.4206 5.71744 6.16615C5.8877 5.91169 6.12959 5.71343 6.41253 5.59645C6.69547 5.47947 7.00674 5.44902 7.30698 5.50894C7.60722 5.56886 7.88296 5.71648 8.09931 5.93311C8.31566 6.14974 8.46291 6.42566 8.52245 6.72598C8.58199 7.0263 8.55113 7.33753 8.43378 7.62032C8.31644 7.9031 8.11787 8.14474 7.86319 8.31467C7.60851 8.4846 7.30917 8.5752 7.003 8.575H7.004ZM8.34 18.339H5.667V9.75H8.34V18.339ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.667C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3H19.67Z" fill="#2D64BC"/>
          </svg>
        </a>
      </div>
    </>
  )
}

export default CardName
