import React from 'react'

function RegisterText() {
  return (
    <>
     <div className="flex flex-col w-[704px] h-[516px]  items-center mx-auto rounded-[16px] p-[24px] gap-[64px]  bg-[#FAFAFA]">
                <div className="flex flex-col w-[656px] height-[356px] gap-[24px]">
                    <h1 className="w-[578px] h-[86px] text-[#232321] font-rubik font-semibold text-[36px] leading-normal tracking-normal gap-[8px]">Join  Kicks Club Get Rewarded Today.</h1>

                    <p className="w-[656px] p-1 h-[44px] opacity-[80%] font-rubik font-semibold text-[16px] leading-none tracking-normal">As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>

                    <ul className=' w-[578px] h-[110px] left-[1rem] relative flex flex-col gap-[4px] opacity-[80%]font-rubik font-semibold text-[16px] leading-none tracking-normal list-disc '>
                      <li>Free shipping</li>
                      <li>A 15% off voucher for your next purchase</li>
                      <li>Access to Members Only products and sale</li>
                      <li>Access to adidas Running and Training apps</li>
                      <li>Special offers and promotions</li>
                    </ul>

                    <p className="width-[44px] opacity-[80%]font-rubik font-semibold text-[16px] leading-none tracking-normal">Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.​</p>
                </div>

                {/* button */}
                <div className="w-[656px] h-[48px] text-white bg-[#232321] flex rounded-[8px] justify-between py-[8px] px-[16px]">
                  <p>Join the Club</p>
                  <img  className='w-[16px] h-[16px]' src="/arrow_forward.png" alt="" />
                </div>
            </div>
    </>
  )
}

export default RegisterText
