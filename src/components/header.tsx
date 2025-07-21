import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IconShoppingCart from "../assets/img/shopping_cart.png"
import type { RootState } from '../stores/index'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from 'stores/cart'

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const carts = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch()

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total)
  }, [carts])

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab())
  }
  
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-semibold'>Home</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
        <img src={IconShoppingCart} className='w-6' alt='Cart' />
        <span className='absolute bottom-2/3 left-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      </div>
    </header>
  )
}

export default Header