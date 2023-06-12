'use client';

import React, { useState } from 'react';
import { productData, productDataProp } from '@/lib/data';
import { BiShoppingBag } from 'react-icons/bi';
import AddToCart from '@/components/AddToCart';

const Cart = () => {
    const [products, setProducts] = useState<productDataProp[]>([
        ...productData,
    ]);

    // const isSelectedProduct = products.some((product) => product.quantity > 0);
    const filteredProducts = products.filter((product) => product.quantity > 0);

    return (
        <>
            {!filteredProducts.length ? (
                <div className="flex flex-col gap-5 my-24 items-center justify-center text-[#212121]">
                    <BiShoppingBag className="text-[5rem]" />
                    <h1 className="text-[2rem] text-center">
                        Your shopping bag is empty.
                    </h1>
                </div>
            ) : (
                <AddToCart products={filteredProducts} />
            )}
        </>
    );
};

export default Cart;
