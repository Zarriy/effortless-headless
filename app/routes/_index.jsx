import e from '../../public/el.svg'

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
                  <p className="text-sm text-[#7d7d7d] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
                  </div>
                  <button className='px-6 py-4 bg-blue-600 text-white rounded-lg font-medium'>Shop Now</button>
          </div>
      </div>
    </div>

    
    </div>
  );
}
