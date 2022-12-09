import React from 'react'

type ButtonProps = {
  buttonType?:  "button" | "submit" | "reset" | undefined,
  text1: string,
  text2?: string,
  background?: string,
  textColor?: string
  paddingX?: string,
  paddingY?: string,
  isMobile?: boolean,
  handleNextLoad?: React.MouseEventHandler<HTMLButtonElement>
}


function Button({buttonType, text1, text2, background, textColor, paddingX, paddingY, isMobile, handleNextLoad} : ButtonProps) {

  let theme = localStorage.getItem('theme')

  console.log('currentTheme', theme)

  return (
    <button 
      type={buttonType} 
      className={`${isMobile && 'w-full'} ${background} ${paddingX} ${paddingY} rounded-md text-${textColor} dark:text-white`}
      onClick={handleNextLoad && handleNextLoad}
      >
      <span className="text-base mr-1 font-semibold">{text1}</span>
      <span className="text-base font-semibold">{text2}</span>
    </button>
  )
}

export default Button