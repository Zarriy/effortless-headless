import {BsArrowRight} from 'react-icons/bs';


export default function PercentageCard({data}){
    const headlines = data.headline.split('-')
    return (
        <div className="relative inline-block">
        <div className='flex items-center gap-2 text-[62px] mb-8'>
            <h3 className=" font-md">{data.percentage}%</h3>
            <BsArrowRight className=" text-para -rotate-45"/>
          </div>
          
          <h2 className="text-lg mb-6 font-normal">{headlines[0]} <span className='text-para font-light'>{headlines[1]}</span> </h2>
          <p className="text-sm text-para">
           {data.body}
          </p>
        </div>
    )
}