import e from '../../public/el.svg';
import imageFirst from '../../public/as.svg';
import backgroundHolder from '../../public/wall.webp';
import screen from '../../public/scre.png';
import frame from '../../public/frame.png';
import {AiOutlineEye, AiOutlineTwitter} from 'react-icons/ai';
import PercentageCard from '~/components/library/percentageCard';
import { review } from 'data/reviews';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';




export default function Index() {
  return (
    <div className="">
    
    <div className="bg-back">
      <div className="m-auto p-7 max-w-[1200px] ">
          <div className="pt-[120px] text-center text-white flex flex-col items-center gap-y-8" id="content_box_1">
            <div className='bg-white p-2 rounded-md mx-auto w-14 h-14 flex flex-col items-center justify-center'>
               <img src={e} alt="logo" className='mt-[-10px]'/>
            </div>
           
                <div className="max-w-2xl mx-auto ">
                  <h1 className="font-headfont mt-5 leading-[68px] tracking-normal">Effortless. Fastest, Bringing Storefront 2.0 Revolution</h1>
                  </div>
                  <div className="max-w-md	">
                  <p className="text-sm text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
                  </div>
                  <button className='px-6 py-4 bg-blue-600 text-white rounded-lg font-medium'>Shop Now</button>
          </div>
      </div>


      <div className="max-w-[1200px] p-7 py-20 m-auto majorGrid text-white">
        <div className="bg-[#181818] rounded-xl">
          <div className="p-8">
            <div>
          <h2 className="text-4xl font-bold mb-6 font-headfont leading-relaxed">Organize any tasks.<br/>
          Prioritize with ease</h2>
          </div>
          <div className="max-w-[325px]">
          <p className="text-sm text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
          </div>
          </div>
          <img src={imageFirst} alt="imag" />
        </div>


        <div className="_framer-body">
          <div className="_internal-framer" >
          <img className="flex z-10" src={frame} alt="image frame" />

          <div id="screen" className="absolute z-0 top-0 p-2">
            <img src={screen} alt="image screen" className="rounded-[42px]"/>
          </div>
          </div>
 
          <div id="background" className="absolute z-0 top-0 h-full">
            <img src={backgroundHolder} alt="back" className='h-full w-full rounded-xl'/>
          </div>
        </div>

        
        <div className="slider_box rounded-xl p-8 bg-[#181818] text-white">
          <div className='flex flex-row justify-between items-center text-2xl mb-8' >
              <div className="bg-white text-black p-1 rounded-md cursor-pointer">
              <AiOutlineEye />
              </div>
              <div className="border border-para rounded-full p-2 hover:border-blue-700 transition-colors duration-200 ease-out cursor-pointer">
              <AiOutlineTwitter />
              </div>
          </div>
            
            <div className="relative h-[395px] w-[260px] overflow-hidden">
              {review.map((item, i) => <PercentageCard key={i} id={i+1} data={item}/>)}
            </div>
          
          <div className="flex justify-between items-center text-3xl mt-28">
            <BsArrowLeftCircle className="cursor-pointer"/>
            <div className="flex gap-2">
              {review.map((dot, i) => <div id={i} key={dot.percentage}  className="bg-para w-3 h-3 rounded-full cursor-pointer"></div>)}
            </div>
            <BsArrowRightCircle className="cursor-pointer"/>
          </div>

          </div>
      </div>


    </div>

  

   


    </div>
  );
}
