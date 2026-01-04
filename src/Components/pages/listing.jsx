import { Outlet } from "react-router-dom";
import { useState } from "react";
import ShoeDisplayCard from "../majorComponents/ShoeDisplayCard";
import { shoeImagesArray } from "../../assets/const";
import FilterName from "../majorComponents/filtername";
const Listing = () => {
    
const sizes =[36,37,38,39,40,41,42,43,44,45]
const colors = [
  "#4A69E2","#FFA52F","#232321","#234D41","#353336","#F08155","#C9CCC6","#677282","#925513","#BB8056",
];
const typeSize = ['casual shoes', 'runners','hiking','sneaker','basketball','golf','outdoor']
    const gender = ['male', 'female']

    return (
        <>
            {/* main container */}
            <div className="w-[1440px]  bg-[#E7E7E3] mx-auto justify-center items-center flex flex-col gap-[2rem] ">
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

                {/* mid text and button */}
                <div className="flex w-[1320px] justify-between">
                    <div className="  flex flex-col w-[284px] h-[65px] ">
                        <h1 className="w-[284px] h-[43px] font-rubik font-semibold text-[36px] text-[#232321]">Life Style Shoes</h1>
                        <p>122 items</p>
                    </div>
                   
                     <button className="  w-[184px] h-[56px] rounded-[16px] p-1  bg-[#F4F2F2]">TRENDING</button>
                </div>

                {/* filter and shoe display*/}
                <div className="flex gap-[1rem]">
                    {/* FILTERS */}
                    <div className="flex flex-col w-[315.3px] h-[964px] gap-[24px] left-[60px]">
                        {/* filter header */}
                        <div className="w-[77px] h-[28px] font-rubik font-semibold text-2xl leading-none tracking-normal text-[#232321] ">Filters</div>
                        {/* filter 1 */}
                        <div className="flex flex-col  w-[315px] rounded-[16px] gap-[16px]">
                           <FilterName text="Refine By">
        <div className="flex gap-4">
          <button className="bg-[#4A69E2] w-[63px] h-[38px] rounded-[12px] text-white">
            mens
          </button>

          <button className="bg-[#4A69E2] w-[63px] h-[38px] rounded-[12px] text-white">
            casual
          </button>
        </div>
      </FilterName>
                            
                   
                           
                        </div>
                        {/* filter 2 */}
<div className="flex flex-col gap-[16px]">
  <FilterName text="Sizes">
    <div className="grid grid-cols-5 grid-rows-2 gap-4">
      {sizes.map((size) => (
        <div
          
          className="flex items-center justify-center bg-white" key={size}
        >
            {size}
        
          
        </div>
      ))}
    </div>
  </FilterName>
</div>
{/* filter 3 */}
                        <div className="flex flex-col gap-[16px]">
  <FilterName text="colors">
    <div className="grid grid-cols-5 grid-rows-2 gap-4">
      {colors.map((color) => (
         <div
      key={color}
      className="w-10 h-10 rounded"
      style={{ backgroundColor: color }}
    />
      ))}
    </div>
  </FilterName>
</div>
{/* filter 4 */}
                        <div className="flex flex-col gap-[16px]">
  <FilterName text="size">
    <div className="flex flex-col gap-5">
      {typeSize.map((type) => (
         <div
      key={type}
      className="flex gap-3"
      >
        <input type="checkbox" className="rounded  gap-2 w-[24px] h-[24px] shrink-0" />
        <p >{type}</p>

    </div>
      ))}
    </div>
  </FilterName>
</div>
{/* filter 5 */}
                        <div className="flex flex-col gap-[16px]">
  <FilterName text="gender">
    <div className="flex flex-col gap-5">
      {gender.map((gender) => (
         <div
      key={gender}
      className="flex gap-3"
      >
        <input type="checkbox" className="rounded  gap-2 w-[24px] h-[24px] shrink-0" />
        <p >{gender}</p>

    </div>
      ))}
    </div>
  </FilterName>
</div>
                        <div></div>
                    </div>
                    {/* SHOE DISPLAY */}
                    <div className="flex flex-col w-[986px] h-[1546px] gap-[38px] left-[394px]">
                        <ul className="grid grid-cols-3 gap-8">
                            {shoeImagesArray.slice(0, 9).map((shoe, index) => (
                                <li key={index}>
                                    <ShoeDisplayCard shoe={shoe} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listing;