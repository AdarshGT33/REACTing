import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notifications, UserProfile} from '.'
import { useStateContext } from '../context/StateContext'

const NavBtn = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-base rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex h-3 w-3 top-1 right-1 rounded-full'/>
        {icon}
    </button>
  </TooltipComponent>
)

function Navbar() {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(()=> {
    if (screenSize <= 900){
      setActiveMenu(false)
    }else {
      setActiveMenu(true)
    }
  },[screenSize])
  return (
    <div className='flex items-center justify-between p-2 md:mx-6 relative'>
      <NavBtn title="Menu" customFunc={()=> setActiveMenu((prev)=> !prev)} color="blue" icon={<AiOutlineMenu/>} />
      <div className='flex'>
        <NavBtn title="Cart" customFunc={() => handleClick('cart')} color="blue" icon={<FiShoppingCart/>} />
        <NavBtn title="Chat" customFunc={()=> handleClick('chat')} dotColor='#03C9D7' color="blue" icon={<BsChatLeft/>} /> 
        <NavBtn title="Notifications" customFunc={()=> handleClick('notification')} dotColor='#03C9D7'  color="blue" icon={<RiNotification3Line/>} />
      </div>
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center p-1 gap-1 cursor-pointer rounded-lg hover:bg-light-gray' onClick={() => handleClick('userProfile')}>
          <img className='w-10 h-10 rounded-full' src={avatar} alt="" />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span> {' '}
            <span className='text-gray-400 font-semibold text-14'>Govind</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notifications/>}
      {isClicked.userProfile && <UserProfile/>}
    </div>
  )
}

export default Navbar