import React from 'react'
import hamburger from "../../assets/icon-hamburger.svg";
import closeImg from "../../assets/icon-close.svg";

function MenuButton({isOpen, onclick}) {
  return (
    <button onClick={onclick} className='focus:outline-none'>
          <img src={isOpen ? closeImg : hamburger} alt="" className=" w-[30px] h-[30px]"  />
          
    </button>
  )
}

export default MenuButton