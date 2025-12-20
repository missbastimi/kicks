import { Link } from 'react-router-dom';
export default function CategoriesCard({category}) {
  return (
    <>
    
          
            {/* image container */}
            
              <div className=" relative flex w-[690px] h-[600px] rounded-tl-[64px] px-[64px] gap-[10px] bg-[#ECEEFO]">
                
                          <img  src={category.image} alt="shoe image" className="w-[480px] h-[600px]  "/>
                          <p className="absolute bottom-1 left-[32px] w-[191px] h-[86px] text-[#232321] font-rubik font-semibold text-[36px] leading-[100%] tracking-[0px] uppercase">
                                                  {category.title}
                                </p>
                                <Link to="/listing"><img src={category.button} alt="export button" className="absolute bottom-1 right-[16px] w-[48px] h-[48px] rounded-[8px] flex gap-[4px] " /></Link>
                      
                       
                </div>
              
    </>  );
}