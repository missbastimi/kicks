import React from 'react'

function button({className}) {
  return (
    <div>
      <button className={`absolute right-0 w-[184px] h-[56px] rounded-[16px] p-1 border border-black bg-[#F4F2F2] ${className}`} >sigma</button>
    </div>
  )
}

export default button
