import logo from '../../../public/logo.svg';
import {RiShoppingBag3Line} from 'react-icons/ri'

export default function Header({menu}){

    return(
        <div className='bg-[#1b1b1b] fixed z-10  w-full'>
        <div className="text-white border-b  border-gray-400  p-4 text-md " style={{backgroundColor: "black"}} id="header_fixed">
            <div className='max-w-[1200px] mx-auto flex flex-row justify-between items-center'> 
            <div>
                <img src={logo} alt="logo" className='h-7'/>
            </div>
           <ul className="flex gap-8">
                {menu.map(item => <li key={item.id}>{item.title}</li>)}
           </ul>
            <div className='flex gap-4 items-center'>
                <RiShoppingBag3Line className="text-[28px]" />
                <button className="text-[15px]  font-bodyfont bg-white text-black px-6 py-1 rounded-sm font-medium hover:bg-white/60 transition-colors ease-in duration-200">Sign In</button>
            </div>
            </div>
        </div>
        </div>
    )

}