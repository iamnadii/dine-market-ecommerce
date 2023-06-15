import React from 'react';
import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import CartCounter from './CartCounter';
import { productDataProp } from '@/lib/data';

const CartProduct = ({ product }: { product: productDataProp }) => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row gap-10 items-start"
                key={product.id}
            >
                <div className="w-full md:w-[24%] lg:w-[22%] xl:w-[20%]">
                    <Image
                        src={`/assets/images/${product.image}.png`}
                        alt="product-image"
                        width={100}
                        height={100}
                        className="rounded-lg w-full"
                    />
                </div>
                <div className="flex flex-col justify-between gap-[17px] w-[100%] md:w-[60%]">
                    <div className="font-bold text-lg sm:text-xl flex items-center justify-between">
                        <h2>{product.title}</h2>
                        <RiDeleteBinLine className="text-[1.75rem] cursor-pointer" />
                    </div>
                    <h3 className="text-gray-400">{product.type}</h3>
                    <p className="font-bold">Delivery Estimation:</p>
                    <p className="text-yellow-400 font-bold">5 Working Days</p>
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">
                            ${+product.price * product.quantity}
                        </p>
                        <div className="flex items-center gap-2">
                            <CartCounter quantity={product.quantity} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
