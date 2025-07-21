import React from 'react'
import { Link } from 'react-router-dom'
import IconShoppingCart from "../assets/img/shopping_cart.png"
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../stores/index'
import { addToCart } from '../stores/cart'

const ProductCart = (props: any) => {
    const carts = useSelector((store: RootState) => store.cart.items);
    const { id, title, price, image } = props.data;
    const dispatch =  useDispatch();
    const handleAdToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={`/product/${id}`}>
            <img src={image} alt="" className='w-full h-80 object-contain object-top drop-shado-[0_80px_30px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium truncate'>{title}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $ <span className='text-2xl font-medium'>{price}</span>
            </p>
            <button onClick={handleAdToCart} className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2'>
                <img src={IconShoppingCart} alt="" className='w-5' />
                Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCart