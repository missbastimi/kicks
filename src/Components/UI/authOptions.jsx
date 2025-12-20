import React from 'react'

function authOptions() {
   const authOptions = [
    "/logos_facebook.png" , "google-icon.png" , "baseline-apple.png"
  ]
  return (
    <>
    <div className="flex w-[480px] h-[64px] gap-[24px]">
  {authOptions.map((auth, index) => (
    <div
      key={index}
      className="border border-[#232321] rounded-[12px] w-[144px] h-[64px] flex items-center justify-center"
    >
      <img
        src={auth}
        alt="auth option"
        className="w-[24px] h-[24px]"
      />
    </div>
  ))}
</div>
    </>
  )
}

export default authOptions
