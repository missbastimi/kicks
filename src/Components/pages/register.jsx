import React from 'react'
import RegisterText from '../majorComponents/registerText'
import RegisterHeader from '../UI/registerHeader'
import AuthOptions from '../UI/authOptions'
import Input from '../UI/input'
import DisclaimerCheckbox from "../UI/disclaimerCheckbox"
function register() {
  const gender= ["male", "female", "other"]
  return (
    <>
    {/* main Container */}
    <div className=' bg-[#E7E7E3] w-fit  justify-center items-center mx-auto gap-[47px]'>
      {/* body */}
      <div className='w-[1295px] h-[953px]  gap-[20px]  flex'>
        {/* inputs */}
        <div className='w-[544px] w-[953px] px-[40px] gap-[24px] flex flex-col '>
          <RegisterHeader className={`w-[480px] h-[78px] gap-[8px] rounde-[16px]`}   text= "Register" desc="sign up with"/>
          <AuthOptions />

          <p className="w-[29px] h-[27px] text-[#232321] font-semibold text-[20px] leading-[100%] tracking-[0%] font-['Open_Sans'] ">OR</p>
          <div className="w-[480px] h-[164px] flex flex-col gap-[20px]">
            <h2 className="text-[#232321] font-['Rubik'] font-semibold text-[24px] leading-[100%] tracking-[0%]">Your Name</h2>
            <Input text="email" />
            <Input text="password" />
          </div>
          {/* gender check */}
          <div className='flex flex-col w-[300px] h-[72px] gap-[20px]'>
            <h2 className='text-[#232321]'>Gender</h2>
            <div className="flex w-[300px] h-[24px] gap-[32px]">
              {gender.map((gender, index)=>(
                <div className="w-[70px] h-[24px] gap-[8px] flex">
                  <input type="checkbox" />
                  <p>{gender}</p>
                </div>
              ))}
            </div>
          </div>

          {/* login Details */}
          <div className='w-[480px] h-[198px] gap-5'>
            <h2 className="w-[158px] h-[28px] font-['Rubik'] font-semibold text-[24px] leading-[100%] tracking-[0%]"> Login Details</h2>
            <Input text="email" className={`w-[480px] h-[48px] mb-5`}/>
            <Input text="password" className={`w-[480px] h-[48px]`}/>
            <p>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>
          </div>


          <DisclaimerCheckbox text="By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions."/>
          <DisclaimerCheckbox text="Keep me logged in - applies to all log in options below. More info" />
          {/* button */}
                    <div className="w-[480px] h-[48px] text-white bg-[#232321] flex rounded-[8px] justify-between py-[8px] px-[16px]">
                    <p>Register</p>
                    <img  className='w-[16px] h-[16px]' src="/arrow_forward.png" alt="" />
                  </div>
        </div>
      
        {/* text */}
        <RegisterText />
      </div>
    </div>
    </>
  )
}

export default register
