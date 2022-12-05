
type ButtonProps = {
  buttonType?:  "button" | "submit" | "reset" | undefined,
  text1: string,
  text2?: string,
  background?: string,
  textColor?: string
  paddingX?: string,
  paddingY?: string,
  isMobile?: boolean,
}


function Button({buttonType, text1, text2, background, textColor, paddingX, paddingY, isMobile} : ButtonProps) {
  return (
    <button type={buttonType} className={`${isMobile && 'w-full'} ${background} ${paddingX} ${paddingY} rounded-md text-${textColor}`}>
      <span className="text-base mr-1 font-semibold">{text1}</span>
      <span className="text-base font-semibold">{text2}</span>
    </button>
  )
}

export default Button