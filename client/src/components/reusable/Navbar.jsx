import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { navLinkData as linkData } from '../../constants';
import { Transition } from '@headlessui/react'




const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const closeMenu = () =>{
    setToggle(false)
  }
  

  return (
    <nav className='sticky top-0   py-4 bg-white z-10' >
      <div className={`flex px-3 md:px-16 justify-between items-center gap-5 relative`}>
        <div className="relative">
          <Link to={'/'} className='flex'>
            <div className=" text-black text-2xl font-bold font-['Roboto'] leading-[44px]">largerthan</div>
            <div className=" text-black text-[25px] font-normal font-['Courgette'] leading-[44px]">i</div>
          </Link>
        </div>
        <div className='text-zinc-600 text-base font-medium gap-10 hidden lg:flex'>
          {linkData.map((e, i)=>
            <NavLink
              key={i}
              onClick={closeMenu}
              className={'[&.active]:text-stone-950 hover:text-stone-950'}
              to={e.url}
            >{e.text}</NavLink>
          )} 
        </div>
        <div className={`flex gap-4`}>
          <NavLink className='text-white bg-gray-800 rounded px-6 py-2' to={'verify-not-robot'}>Donate</NavLink>
          <button className='text-black lg:hidden font-bold' onClick={()=> setToggle(!toggle)}>{toggle?<IoClose size={'2.6rem'} />:<IoMenu size={'2.6rem'}/>}</button>
        </div>
      </div>

      <Transition
        show={toggle}
        enter="transition-translate duration-150"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-translate duration-150"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className={
          `p-5 items-center text-zinc-600 
          text-base font-medium gap-5 
          bg-white
          flex
          w-full
          h-screen 
          lg:hidden flex-col 
          absolute
          
          `}
        >
            {linkData.map((e, i)=>
              <NavLink
                key={i}
                onClick={closeMenu}
                className={'[&.active]:text-stone-950 w-full text-center p-2 hover:bg-zinc-600 hover:bg-neutral-200'}
                to={e.url}
              >{e.text}</NavLink>
            )}
          </div>
      </Transition>

    </nav>
  )
}
export default Navbar