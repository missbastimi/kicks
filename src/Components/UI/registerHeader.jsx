import React from 'react'

function registerHeader({className ,text, desc}) {
  return (
    <>
    <div className={`flex flex-col w-[464px] h-[68px] rounded-[16px] gap-[1.5rem] py-[16px] ${className}`} >
                <h1 className=' text-[#232321] font-rubik font-semibold text-[36px] leading-none tracking-normal'>{text}</h1>

                <p><a href="#">{desc}</a></p>
                </div>
    </>
  )
}

export default registerHeader
