import React from 'react'

function input({className, text}) {
  return (
    <>
                      <input type="email" className={`w-[480px] h-[48px] border border-gray-300 rounded-md p-[1rem] gap-[8px] ${className}`} placeholder={text} />
</>
  )
}

export default input
