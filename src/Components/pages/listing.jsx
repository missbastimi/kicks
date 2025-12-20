import { Outlet } from "react-router-dom";
import { useState } from "react";
import ShoeDisplayCard from "../majorComponents/ShoeDisplayCard";
import { shoeImagesArray } from "../../assets/const";
const Listing = () => {
    

    const [isOpen, setIsOpen] = useState(false);

    function toggleDisplay() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* main container */}
            <div className="w-[1440px] h-[3245px] bg-[#E7E7E3] mx-auto justify-center items-center gap-2 ">
                {/* hero */}
                <div className="w-[1320px] h-[395px] rounded-[64px] relative">
                    <img src="/listingHero.png" alt="shoe image" className="absolute object-cover" />
                    <div className="flex absolute flex-col h-[191px] w-[490px] top-[102px] left-[40px] gap-[8px]">
                        {/*  typo */}
                        <p className="w-[490px] h-[33px] font-semibold text-[24px] leading-[100%] tracking-normal  font-sans text-[#E7E7E3]">Limited time only</p>
                        <h1 className="w-[419px] h-[88px] font-rubik font-semibold text-[74px] leading-[100%] tracking-[0] text-[#FFFFFF]">Get 30% off</h1>
                        <p className="w-[490px] h-[54px] font-sans text-[20px] leading-[100%] tracking-[0] text-gray-100"> Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
                    </div>
                </div>

                {/* mid */}
                <div className="flex w-[1320px]  h-[65px] justify-between">
                    <div className="  flex flex-col w-[284px] h-[65px] ">
                        <h1 className="w-[284px] h-[43px] font-rubik font-semibold text-[36px] text-[#232321]">Life Style Shoes</h1>
                        <p>122 items</p>
                    </div>
                   
                     <button className="  w-[184px] h-[56px] rounded-[16px] p-1  bg-[#F4F2F2]">TRENDING</button>
                </div>

                {/* filters */}
                <div className="flex flex-col w-[315.3px] h-[964px] gap-24px left-[60px]">
                    <div className="w-[77px] h-[28px] font-rubik font-semibold text-2xl leading-none tracking-normal text-[#232321] ">Filters</div>
                    {/* filter 1 */}
                    <div className="flex flex-col h-[78px] w-[315px] rounded-[16px] gap-[16px]">
                        <div className="relative flex w-[315px] h-[24px] justify-between">
                            <p className="font-rubik font-semibold text-[20px] leading-[100%] tracking-normal text-[#232321] uppercase">refine by</p>
                            
                            <button className="absolute right-0 w-[24px] h-[24px]" onClick={toggleDisplay}>
                                {/* I removed the <span>toggle</span> text as it might overlap your image */}
                                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    <img src="/Up.png" alt="up" />
                                </div>
                            </button>
                        </div>
                        
                        {/* FIX 3: Fixed the broken className syntax */}
                        {isOpen && (
                            <div className="flex flex-col w-[315px] h-[138px] gap-[16px]">
                                <div className="flex h-[151px] w-[38px] gap-1rem">
                                    <button className="bg-[#4A69E2]">mens</button>
                                    <button className="bg-[#4A69E2]">casual</button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* filter 2 placeholders */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* SHOE DISPLAY */}
                {/* Fixed typo: flex-col */}
                <div className="flex flex-col w-[986px] h-[1546px] gap-[38px] left-[394px]">
                    <ul className="grid grid-cols-3 gap-8">
                        {shoeImagesArray.slice(0, 9).map((shoe, index) => (
                            // Added index to key to prevent unique key errors if titles are same
                            <li key={index}>
                                <ShoeDisplayCard shoe={shoe} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Listing;