import React from 'react'

function disclaimerCheckbox({text, className}) {
  return (
    <>
<div className={`w-[480px] h-fit flex gap-[8px] justify-center items-center ${className}`}>
                    <input type="checkbox" className='w-[24px] h-[24px] shrink-0' />
                     <p className='text-[#232321] '>{text}</p>
                  </div>

    
    </>
  )
}

export default disclaimerCheckbox
