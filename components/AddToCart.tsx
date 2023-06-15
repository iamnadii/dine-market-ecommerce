'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';
import { productDataProp } from '@/lib/data';
import CartProduct from './CartProduct';

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
                <div className="flex-[3] flex flex-col gap-8">
                    {products.map((product: productDataProp) => {
                        return (
                            <CartProduct product={product} key={product.id} />
                        );
                    })}
                </div>
                <Separator className="my-10 bg-[#212121] block lg:hidden" />
                <div className="flex flex-col gap-6 p-4 lg:p-6 rounded-md bg-blue-50 h-min">
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
                    <Button className="bg-[#212121] border-2 border-transparent font-semibold text-white rounded-none px-10 py-6 hover:bg-white hover:text-[#212121] hover:border-[#212121] hover:border-2">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
