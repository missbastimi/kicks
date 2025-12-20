import React from 'react'
import RegisterText from "../majorComponents/registerText"
import AuthOptions from '../UI/authOptions'
import RegisterHeader from '../UI/registerHeader'
import Input from "../UI/input"
import DisclaimerCheckbox from "../UI/disclaimerCheckbox"
function login() {

 
  return (
    <>
    {/* Main Container */}
    <div className=" bg-[#E7E7E3] justify-center items-center mx-auto gap-[47px]">
      {/* body */}
        <div className="flex width-[1295px] height-[516px]  gap-[50px] ">
            {/* input section */}
            <div className="flex flex-col w-[544px] height-[516px] mx-auto px-[40px] gap-[24px]">
              <RegisterHeader text="Login" desc="Forgot password?" className={`mb-4`}/>


              <Input text="email"/>
              <Input text="password"/>


                  <DisclaimerCheckbox text="Keep me logged in - applies to all log in options below. More info"/>

                  {/* button */}
                  <div className="w-[480px] h-[48px] text-white bg-[#232321] flex rounded-[8px] justify-between py-[8px] px-[16px]">
                  <p>Email Login</p>
                  <img  className='w-[16px] h-[16px]' src="/arrow_forward.png" alt="" />
                </div>
              

              {/* login options */}
              <AuthOptions />


              {/* login options disclaimer */}
              <div className='w-[480px] h-[44px]'>
                <p>
                  By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.
                </p>
              </div>


            </div>

            {/* text section */}
           <RegisterText />

        </div>
    </div>
    </>
  )
}

export default login
