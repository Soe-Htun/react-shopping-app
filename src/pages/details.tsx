import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "stores";
import BackButton from "components/ui/back";
import { UseDispatch } from "react-redux";
import { addToCart } from "stores/cart";

const Details = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Product Not found</div>;

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAdToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: quantity,
      })
    );
  };
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <BackButton className="absolute left-0" />
        <h2 className="text-3xl text-center">Product Details</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={product.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{product.title}</h1>
          <p className="font-bold text-3xl">${product.price}</p>
          <div className="flex gap-6">
            <div className="flex gap-4">
              <button
                className={`bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center ${
                  quantity === 1 && "text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
              onClick={handleAdToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
