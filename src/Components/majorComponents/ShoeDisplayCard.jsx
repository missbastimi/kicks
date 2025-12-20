import React from "react";
export default function ShoeDisplayCard({shoe}) {
    return (
        <>
        <div className=" flex w-[1320px] h-[486px] gap-[16px]" >
          <div className="flex flex-col w-[318px] h-[486px] gap-[16px]">
            {/* imageholder */}
            <div className="relative flex w-[318px] h-[350px] rounded-[28px] p-[8px] bg-[#FAFAFA] ">
              {/* NEW TAG */}
               <img src={shoe.image} alt={shoe.title} className="w-[302px] h-[334px] rounded-[24px] object-cover" />
              <div className="absolute top-2 left-2  w-[58px] h-[38px] rounded-tl-[24px] rounded-br-[24px] px-[16px] py-[12px]  rotate-[-0deg] bg-[#4A69E3]"> NEW</div>
 
             
            </div>

            {/* text and button holder */}
            <div className="flex flex-col w-[318px] h-[120px] gap-[16px]">
            {/* text holder */}
            
    <p
      
      className="w-[318px] h-[72px] font-rubik font-semibold text-[20px] leading-[110%] tracking-normal text-[#232321]"
    >
      {shoe.title}
    </p>
            {/* buttonholder */}
            <div className="flex flex-col gap-[10px] h-[48px] w-[318px] gap-[10px]">
    <button
      className="w-[318px] h-[48px] 
                 bg-[#4A69E3] flex rounded-[8px] px-[16px] py-[8px] gap-[4px] text-white font-rubik font-semibold 
                 text-[16px] leading-[100%] tracking-normal uppercase"
    >
      {shoe.tag}
    </button>
</div>
            </div>

          </div>
        </div>
        </>
    )
  
}



