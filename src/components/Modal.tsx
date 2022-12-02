import { useState } from 'react'



function Modal() {

  const [isFullTimeChecked, setIsFullTimeChecked] = useState<boolean>(false)




  return (
    <>
      <div className="absolute flex justify-center items-start top-0 left-0 w-screen h-full bg-black opacity-50 -z-5"/>
          <div className="bg-white opacity-100 w-5/6 h-40 fixed top-1/3 left-1/2 tansform -translate-x-1/2 z-50 rounded-md">
              <div className="flex items-center w-12/12 px-3 border-b border-gray-300">
                  <span className='px-2'>
                      <img src="/src/assets/desktop/icon-location.svg" alt="search-icon" width={24} height={17}/>
                  </span>
                  <label className="hidden">search-term</label>
                  <input className="p-3 border-none w-full" type="text" id="role" name="role" placeholder="Filter by Location"/>
              </div>
              <div className="flex items-center px-6 my-4">
                <label className="hidden">search-term</label>
                <input className="block border-none rounded-sm bg-app-light-grey w-5 h-5" type="checkbox" id="role" name="role" checked={isFullTimeChecked} onChange={() => setIsFullTimeChecked(!isFullTimeChecked)}/>
                <span className="ml-2 font-semibold">
                    Full Time 
                </span>
                <span className='inline-block ml-1 font-semibold'>
                    Only
                </span>
        </div>
        <div className='mb-4'>
          <button className={`block w-[85%] mx-auto px-8 py-2 bg-app-violet rounded-md text-white mt-2`}>
            <span className="text-base mr-1 font-semibold">Search</span>
          </button>

        </div>
        </div>

    </>
  )
}

export default Modal