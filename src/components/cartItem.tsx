import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { changeQuantity } from 'stores/cart';

const CartItem = (props: any) => {
    const { productId, quantity } = props.data;
      const products = useSelector((state: RootState) => state.products.items);
      const product = products.find((p) => p.id === Number(productId)); 

      const dispatch = useDispatch()
      
      if (!product) return <div>Cart Not found</div>;

      const handleMinusQuantity = () => {
        dispatch(changeQuantity({
          productId: productId,
          quantity: quantity - 1
        }))
      }
      const handlePlusQuantity = () => {
        dispatch(changeQuantity({
          productId: productId,
          quantity: quantity + 1
        }))
      }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5'>
      <img src={product.image} alt="" className='w-12' />
      <h3>{product.title}</h3>
      <p>${product.price * quantity}</p>
      <div className='w-20 flex justify-between'>
        <button
                className={`bg-gray-200 w-6 h-6 font-bold text-cyan-600 rounded-full ${
                  quantity === 1 && "text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className='mx-3'>
                {quantity}
              </span>
              <button
                className="bg-gray-200 w-6 h-6 font-bold text-cyan-600 rounded-full"
                onClick={handlePlusQuantity}
              >
                +
              </button>
      </div>
    </div>
  )
}

export default CartItem