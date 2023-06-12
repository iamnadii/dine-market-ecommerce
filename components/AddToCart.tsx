import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { productDataProp } from '@/lib/data';
import { Separator } from './ui/separator';

const AddToCart = ({ products }: { products: productDataProp[] }) => {
    const totalPrice = products.reduce((sum, product) => {
        return sum + +product.price * product.quantity;
    }, 0);
    const totalQuantity = products.reduce((sum, product) => {
        return sum + +product.quantity;
    }, 0);
    return (
        <div className="mx-0 lg:mx-10 mt-16 mb-24">
            <h1 className="text-[1.5rem] font-bold mb-6">Shopping Cart</h1>
            <div className="flex justify-between gap-2 flex-col lg:flex-row">
                <div className="flex-[3] flex flex-col gap-10">
                    {products.map((product: productDataProp) => {
                        return (
                            <div
                                className="flex flex-col md:flex-row gap-10 items-start"
                                key={product.id}
                            >
                                <div className="w-full md:w-[25%]">
                                    <Image
                                        src={`/assets/images/${product.image}.png`}
                                        alt="product-image"
                                        width={100}
                                        height={100}
                                        className="rounded-lg w-full"
                                    />
                                </div>
                                <div className="flex flex-col justify-between gap-3 w-[100%] md:w-[60%]">
                                    <div className="font-bold text-lg sm:text-xl flex items-center justify-between">
                                        <h2>{product.title}</h2>
                                        <RiDeleteBinLine className="text-[1.75rem] cursor-pointer" />
                                    </div>
                                    <h3 className="text-gray-400">
                                        {product.type}
                                    </h3>
                                    <p className="font-bold">
                                        Delivery Estimation:
                                    </p>
                                    <p className="text-yellow-400 font-bold">
                                        5 Working Days
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-bold">
                                            ${+product.price * product.quantity}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Button className="rounded-full text-white bg-[#212121] ">
                                                -
                                            </Button>
                                            <span className="font-bold text-2xl">
                                                {product.quantity}
                                            </span>
                                            <Button className="rounded-full text-white bg-[#212121]">
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Separator className="my-10 bg-[#212121] block lg:hidden" />
                <div className="flex flex-col gap-6 p-0 lg:p-6 rounded-md">
                    <h2 className="font-bold text-lg">Order Summary</h2>
                    <div className="flex items-center justify-between">
                        <h3>Quantity:</h3>
                        <span>
                            {totalQuantity}&nbsp;Product
                            {totalQuantity > 1 && `s`}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3>Subtotal:</h3>
                        <span>${totalPrice}</span>
                    </div>
                    <Button className="bg-[#212121] border-2 font-semibold text-white rounded-none px-10 py-6 hover:bg-white hover:text-[#212121] hover:border-[#212121] hover:border-2">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
