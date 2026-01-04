import { Outlet } from "react-router-dom";
import ShoeDisplayCard from "../majorComponents/ShoeDisplayCard";
import CategoriesCard from "../majorComponents/CategoriesCard";
import  ReviewsCard from "../majorComponents/reviewsCard"


const LandingPage = () => {
      const shoeImagesArray = [
        {title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: "/display1.png", tag: "View Product - $125"},
        {title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: "/display2.png", tag: "View Product - $125"},
        {title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: "/display3.png", tag: "View Product - $125"},
        {title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: "/display4.png", tag: "View Product - $125"
        },
      ];
      const categoryShoes= [
        {image: "/catshoe.png", alt: "nike" , title: "lifestyle shoes", button: "/Button.png"},
        {image: "/basketballshoe.png", alt: "nike", title: "basketball shoes", button: "/Button.png"},
      ]

      const reviews = [
        {title: "good quality", desc: "I highly recommend shopping from kicks", stars: "/ratings.png" , rating: "5.0", reviewer: "/reviewer1.png", image: "/reviewItem1.png" },
        {title: "good quality", desc: "I highly recommend shopping from kicks", stars: "/ratings.png" , rating: "5.0", reviewer: "/reviewer1.png", image: "/reviewItem1.png" },
        {title: "good quality", desc: "I highly recommend shopping from kicks", stars: "/ratings.png" , rating: "5.0", reviewer: "/reviewer1.png", image: "/reviewItem1.png" },
      ]

  return (
    <>
    {/* main container */}
    <div className="w-[1440px]  bg-[#E7E7E3] justify-center items-center mx-auto flex flex-col gap-[5rem]">
      
      {/* hero */}
        <div className="  w-[82.5rem] h-[65rem] relative flex flex-col   gap-1.5 ">
          {/* Heading */}
          <div className="w-[81rem] h-[16.5rem]   ">
            <div className="font-rubik font-bold text-[13.96875rem] leading-[100%] tracking-[0px] uppercase text-[#232321]
      ">  Do it
              <span className="font-rubik font-bold text-[13.96875rem] leading-[100%] tracking-[0px] uppercase text-[#4A69E2]">
              right
              </span></div>
      
      
      
          </div>
          {/* Image Container */}
      <div className="relative w-[82.5rem] h-[47rem]">
        <img
      src="/nike1main.jpg"
      alt="nike shoes"
      className="rounded-[64px] w-[100%] h-[100%] object-cover"
        />
      
       {/* side tag */}
        <div className="absolute flex  h-[67px] w-[237px] rotate-[270deg] top-[9rem] left-[-84px] bg-black/70 text-white px-6 items-center justify-center rounded-b-[16px] text-sm">
         Nike product of the year
        </div>
        {/* imageText & button */}
        <div className="absolute flex flex-col w-[490px] h-[226px] top-[476px] left-[48px] gap-[24px]">
      <div className="flex flex-col w-[490px] h-[154px]"></div>
      <p className="h-[88px] font-rubik font-semibold text-[74px] leading-[100%] tracking-normal text-white uppercase">Nike air max</p>
      <p className="h-[66px] font-openSans font-semibold text-[24px] leading-[100%] tracking-normal text-[#E7E7E3]">Nike introducing the new air max for everyone's comfort</p>
      <button className="w-[138px] h-[48px] rounded-[8px] pt-[8px] pr-[32px] pb-[8px] pl-[4px]  gap-[4px] font-rubik font-semibold text-[18px] leading-[100%] tracking-normal 
       uppercase bg-[#4A69E3] ">Shop Now</button>
      
        </div>
      
        {/* Smaller images */}
        <div className="absolute flex flex-col w-[160px] h-[336px] top-[382px] left-[1128px] gap-[16px]">
      <img
        src="/nike1side1.jpg"
        alt="close up view of nike shoe"
        className="w-[160px] h-[160px] rounded-2xl border-[2px] border-[#E7E7E3]"
      />
      <img
        src="/nike1side2.jpg"
        alt="close up view of nike shoe"
        className="w-[160px] h-[160px] rounded-2xl border-[2px] border-[#E7E7E3]"
      />
        </div>
       
      </div>
        </div>
        {/* container 2 */}
        <div className="w-[1320px] h-[658px]  relative flex flex-col  gap-2  ">
      
            {/* text */}
            <div className="relative flex  w-[1320px] h-[140px] justify-between ">
               <p className="absolute left-0 w-[589px] h-[140px] font-rubik font-semibold text-[74px] leading-[95%] tracking-[0px] uppercase text-[#232321]">Don’t miss out new drops</p>
            <button className="absolute right-0 rounded-[8px] pt-[8px]  py-[8px] px-[4px]  gap-[4px] font-rubik font-semibold text-[18px] leading-[100%] tracking-normal top-0 uppercase bg-[#4A69E2]"><p>Shop Newdrops</p></button></div>
      
        <ul className="grid grid-cols-4 gap-8 ">
        {shoeImagesArray.map((shoe) => (
      <li key={shoe.title}>
        <ShoeDisplayCard shoe={shoe} />
      </li>
        ))}
      </ul>
      
      
        </div>
      
        {/* Container 3 */}
      
        <div className="w-[1440px] h-[824px] relative bg-black">

          <div className="flex w-[1320px] h-[70px] absolute top-[90px] left-[60px] justify-between">
            <p className=" w-[463px] h-[70px]font-rubik font-semibold uppercase text-[74px] leading-[95%] tracking-[0px] text-white">categories</p>
          </div>

<div className="flex absolute w-[1380px] h-[600ppx] top-[224px] left-[60px] rounded-tl-[48px] bg-[#ECEEF0]">
         <ul className="grid grid-cols-2 gap-4">
          {categoryShoes.map((category) => (
        <li key={category.title}>
          <CategoriesCard category={category} />
        </li>
          ))}
        </ul>
 </div>
      
            </div>

            {/* Reviews Container */}
            <div className="relative flex flex-col w-[1320px] h-[619px]  gap-[48px] ">
              
              
              <div className="relative flex w-[1320px] h-[70px] justify-between">
                <p className="w-[589px] h-[70px] font-rubik  font-semibold uppercase leading-[95%] tracking-[0px] text-[74px] text-[#232321] ">reviews</p>
                <button className="w-[121px] h-[48px] gap-[10px] absolute right-0 bg-[#4A69E2] py-[8px] px-[32px] rounded-[8px] flex">see all</button>
              </div>


              <div className="flex w-[1320px] h-[501px] gap-[16px]">
                
                  <ul className="grid grid-cols-3 gap-6">
          {reviews.map((review) => (
        <li key={review.title}>
          <ReviewsCard review={review} />
        </li>
          ))}
        </ul>
                  
          </div>

            </div>
      
      
             
             
             


             </div>
        


   
    </>
  );
};

export default LandingPage;
