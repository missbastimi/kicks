import React from 'react'
import { useState } from 'react'

function filtername({ children, text }) {
  const [isOpen, setIsOpen] = useState(true);

    function toggleDisplay() {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <div className="relative flex w-[315px] h-[24px] justify-between">
                                <p className="font-rubik font-semibold text-[20px] leading-[100%] tracking-normal text-[#232321] uppercase">{text}</p>
                    
                                <button className="absolute right-0 w-[24px] h-[24px]" onClick={toggleDisplay}>
                                    
                                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src="/Up.png" alt="up" />
                                    </div>
                                </button>
                            </div>

                            {/* Dynamic content */}
      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}

                       
                             {/* {isOpen && (

                            
                                 <div className="flex  w-[38px] gap-[1rem]">
                                        <button className="bg-[#4A69E2] w-[63px] h-[38px] rounded-[12px] py-[12px] px-[16px] text-white">mens</button>
                                        <button className="bg-[#4A69E2] w-[63px] h-[38px] rounded-[12px] py-[12px] px-[16px] text-white">casual</button>
                                    </div>
                                
                                    
                            
                            )}
                             */}
    </>
  )
}

export default filtername
