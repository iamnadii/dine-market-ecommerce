'use client';

import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { productData, productDataProp } from '../lib/data';
import SingleProduct from './SingleProduct';
import Link from 'next/link';

const Products = () => {
    const [products, setProducts] = useState<productDataProp[]>([
        ...productData,
    ]);
    return (
        <section className="flex flex-col gap-12 mt-24">
            <div className="text-center">
                <p className="text-blue-500 font-bold uppercase">products</p>
                <h2 className="text-[2rem] text-[#212121] font-bold">
                    Check What We Have
                </h2>
            </div>
            <div className="flex items-center justify-center xl:justify-between flex-wrap gap-10 xl:gap-4">
                {products?.slice(0, 3)?.map((product) => {
                    return <SingleProduct key={product.id} data={product} />;
                })}
            </div>
            <div>
                <Link
                    href="/all-products"
                    className="flex items-center justify-center sm:justify-end gap-2 text-lg text-[#212121]  cursor-pointer"
                >
                    <span>More</span>
                    <BsFillArrowRightCircleFill />
                </Link>
            </div>
        </section>
    );
};

export default Products;
