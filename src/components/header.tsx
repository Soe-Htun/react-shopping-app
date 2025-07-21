import React from 'react'
import { Link } from 'react-router-dom'
import IconShoppingCart from "../assets/img/shopping_cart.png"

const Header = () => {
  return (
    <header>
      <Link to="/" className='text-xl font-semibold'>Home</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
        <img src={IconShoppingCart} className='w-6' alt='Cart' />
        <span className='absolute bottom-2/3 left-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>0</span>
      </div>
    </header>
  )
}

export default Header