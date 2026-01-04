import { useState } from "react";


const Footer = () => {
const company= [ "About", "Contact", "Blog"];
const categories= ["runners", "sneakers", "basketball",  "outdoor", "hiking", "golf"];
const socials= [ "/facebook.png", "/twitter.png", "/instagram.png", "/tiktok.png"];

return (
    <footer className="bg-[#E7E7E3] w-full relative bottom-0 flex flex-col px-[60px] h-[931px] text-white py-8">
        {/* blue */}
        <div className="relative w-full h-[545px] rounded-[48px] bg-[#4A69E3]">
            <div className="flex flex-col w-[510px] h-[237px] px-8 py-8 gap-[32px]">
                <div className="flex flex-col w-[510px] h-[157px] gap-[16px]">
                    <p className="font-rubik 
  font-semibold 
  text-[48px] 
  leading-[100%]
  tracking-[0px]
  uppercase w-[510px] h-[114px] text-white">Join our KicksPlus Club & get 15% off</p>
  <p className="w-[354px] h-[27px] font-openSans font-semibold text-[20px] leading-[100%] tracking-[0px] text-[#E7E7E3] ">Sign up for free! Join the community.</p>
                </div>
                <div className="flex  w-[448px] h-[48px] gap-[4px]">
                    <input type="text" placeholder="Enter your email" className="border border-amber-50 bg-white w-[342px] h-[48px] rounded-[8px] px-[16px] py-[12px] text-black text-[16px] leading-[100%] tracking-normal font-openSans font-medium" />
                    <button
    className="w-[102px] h-[48px] bg-black rounded-[8px] text-white font-rubik font-semibold text-[16px] leading-[100%] tracking-normal uppercase cursor-pointer"
  >
    Subscribe
  </button>
                </div>
            </div>
            <div className="absolute w-[351px] h-[88px] top-[144px] left-[785px]">
                <img src="/Logo.png" alt="kicks logo" />
                <img src="/Add_circle.png" alt="circle" className="absolute top-[-20px] right-[-20px]" />
            </div>
        </div>
        {/* black */}
        <div className="absolute w-full h-[591px] rounded-[48px] bg-[#232321] bottom-0 overflow-hidden" >
            <div className="relative">
                <div className=" absolute flex flex-col w-[446px] h-[128px] top-[40px] left-[40px] gap-[4px]"> <p className="w-[159px] h-[43px] text-[#FFA52F] font-rubik font-semibold text-[36px] leading-[100%] tracking-[0px]">About us</p>
                <p className="w-[446px] h-[81px] font-openSans font-semibold text-[20px] leading-[100%] tracking-[0px]">We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p></div>

                {/* socials and pages */}
                <div className="absolute flex w-[664px] h-[246px] top-[40px] left-[608px] gap-[128px]">
                    
                    {/* categories */}
                    <div className="flex flex-col w-[129px] h-[246px] gap-[16px]">
 <p className="w-[159px] h-[43px] text-[#FFA52F] font-rubik font-semibold text-[36px] leading-[100%] tracking-[0px]">Categories</p>                        {categories.map((category) => (
                            <p key={category} className="font-openSans font-semibold text-[20px] leading-[100%] tracking-[0px]">{category}</p>
                        ))}
                    </div>
                    {/* company */}
                    <div className="flex flex-col w-[111px] h-[141px] gap-[16px]">
                         <p className="w-[159px] h-[43px] text-[#FFA52F] font-rubik font-semibold text-[36px] leading-[100%] tracking-[0px]">Categories</p>    
                         {company.map((company)=> (
                             <p key={company} className="font-openSans font-semibold text-[20px] leading-[100%] tracking-[0px]">{company}</p>
                         ))}
                    </div>

                    {/* socials */}
                    <div className="flex flex-col w-[168px] h-[68px] gap-[16px]">
    <p className="w-[159px] h-[43px] text-[#FFA52F] font-rubik font-semibold text-[36px] leading-[100%] tracking-[0px]">
        Follow us
    </p>
<div className="flex gap-2">
    
        {socials.map((social, index) => (
            <img
                key={index}
                src={social}
                alt="social media handle"
                className="w-[24px] h-[24px] flex "
            />
        ))}
</div>
</div>

            </div>
            <div className="absolute w-[1262px] h-[313.66px] top-[383px]  mx-auto"><img src="/Logo.png" alt="logo" className=""  /></div>
                </div>
                
             </div>
        {/* <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">About</h3>
                    <p className="text-gray-400">We're the biggest hypestore in the universe. We got you all covered with our exclusive collection and latest drops</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-gray-400">email@example.com</p>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
                <p>&copy; 2024 KICKS. All rights reserved.</p>
            </div>
        </div> */}
    </footer>
);}

    export default Footer;



