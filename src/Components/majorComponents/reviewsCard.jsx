import React from "react"
export default function reviewsCard ({review}) {
    return  (
        <>
         <div className="flex flex-col w-[429.5px] h-[501px]">
            {/* review and reviewer */}
             <div className="flex flex-col w-[429px] h-[176px] rounded-t-[32px] p-[32px] gap-[8px] bg-[#FAFAFA] ">
                <div className="flex w-[365px] h-[80px] relative gap-[8px]">
                    <img src={review.reviewer} alt="reviewer's image " className="w-[64px] h-[64px] absolute right-0" />
                    <div className="absolute left-0 flex flex-col w-[293px] h-[80px] gap-[8px]"><span className="font-rubik text-24px font-semibold leading-[100%] tracking-normal w-[293px] h-[28px]">{review.title}</span><span className="w-[293px] h-[44px] font-normal text-[16px] leading-[100%] tracking-normal">{review.desc}</span ></div>
                </div>
                <div className="flex w-[356px] h-[24px] gap-[4px]">
                    <img src={review.stars} alt="number of stars" className="w-[120px] h-[24px]"/>
                    {review.rating}
                </div>
             </div>

             {/* item being reviewed */}
                     <div className="w-[429.33px] h-[325px] rounded-b-[32px] ">
                        <img src={review.image} alt="item being reviwed w-[497px] h-[377px] object-cover overflow-hidden" />
                  
         </div>
            </div>
                     </>
    )
}