import Button from "./Button";
import Body from './Body'
import logo from '../assets/desktop/logo.svg'



function Header({currentJob} : any) {

  const {id, company, logo, logoBackground, website, requirements, description, apply, position, contract, postedAt, location} = currentJob  


  return (
    <div 
    className='flex flex-col md:flex-row items-center justify-center md:justify-between absolute left-1/2 -translate-x-1/2 top-10 mt-24 h-52 w-5/6 lg:w-[700px] md:h-[140px] bg-white dark:bg-app-very-black-blue rounded-md' >
        <div className="w-10 h-10 md:w-36 md:h-[140px] flex justify-center items-center absolute md:static -top-4 p-2 rounded-md rounded-tl-none rounded-r-none" style={{backgroundColor: logoBackground}}>
            <img src={logo} width={81} />
        </div>
        <div className="w-full md:w-6/12 md:pl-6 flex flex-col justify-center items-center md:items-start">
            <h3 className="h-10 dark:text-white">{company}</h3>
            <span className="block text-app-gray">{website}</span>
        </div>
        <div className="w-full my-4 md:w-2/12 flex justify-center items-center md:pr-16">
            <Button 
                text1="Company" 
                text2="Site"
                background={"bg-app-light-grey"} 
                textColor={"app-violet"}
                paddingX={"px-4"}
                paddingY={"py-2"}
            />
        </div>
    
    </div>
  )
}

export default Header