'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiShoppingCart } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { productData, productDataProp } from '@/lib/data';
import CartCounter from './CartCounter';

const ProductInfo = ({
    searchParams,
}: {
    searchParams: { id: string; name: string };
}) => {
    const [products, setProducts] = useState<productDataProp[]>([
        ...productData,
    ]);
    const toShowData: productDataProp[] = products.filter(
        (product: productDataProp) => product.id === +searchParams.id,
    );
    return (
        <div className="mt-20">
            <div className="flex items-start gap-5 xl:gap-16 flex-wrap">
                <div className="flex items-start gap-10">
                    <Image
                        src={`/assets/images/${toShowData[0].image}.png`}
                        alt="product-info"
                        className="hidden md:block"
                        width={100}
                        height={100}
                    />
                    <Image
                        src={`/assets/images/${toShowData[0].image}.png`}
                        alt="product-info"
                        width={700}
                        height={700}
                    />
                </div>
                <div className="flex flex-col items-start gap-10">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            {toShowData[0].title}
                        </h2>
                        <span className="text-xl text-[#a3a3a3]">
                            {toShowData[0].type}
                        </span>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Select Size:</h2>
                        <Tabs defaultValue="xs">
                            <TabsList>
                                <TabsTrigger value="xs">XS</TabsTrigger>
                                <TabsTrigger className="px-4" value="s">
                                    S
                                </TabsTrigger>
                                <TabsTrigger className="px-4" value="m">
                                    M
                                </TabsTrigger>
                                <TabsTrigger className="px-4" value="l">
                                    L
                                </TabsTrigger>
                                <TabsTrigger value="xl">XL</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                    <div className="flex items-center gap-8">
                        <h2 className="text-xl font-bold">Quantity:</h2>
                        <div className="flex items-center gap-2">
                            <CartCounter quantity={toShowData[0].quantity} />
                        </div>
                    </div>
                    <div className="flex md:items-center items-start gap-4 flex-col-reverse sm:flex-row">
                        <Link href="/cart">
                            <Button className="bg-[#212121] border-2 font-semibold text-white rounded-none px-10 py-6 hover:bg-white hover:text-[#212121] hover:border-[#212121] hover:border-2">
                                <FiShoppingCart className="text-2xl mr-2" />
                                Add to cart
                            </Button>
                        </Link>
                        <p className="font-bold text-3xl">
                            ${toShowData[0].price}.00
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-24">
                <div className="relative">
                    <h2 className="text-[3rem] xxs:text-[3.75rem] sm:text-[5rem] md:text-[6.875rem] font-extrabold absolute leading-[110px] opacity-10 z-[1]">
                        Overview
                    </h2>
                    <h3 className="text-3xl text-[#212121] font-bold pt-8">
                        Product Information
                    </h3>
                </div>
                <Separator className="my-14 bg-[#212121]" />
                <div className="flex flex-col gap-10">
                    <div className="flex items-start flex-col sm:flex-row gap-10">
                        <div className="flex-[1]">
                            <h3 className="text-xl font-bold">
                                Product Details
                            </h3>
                        </div>
                        <div className="flex-[3] tracking-wider">
                            <p>{toShowData[0].details}</p>
                        </div>
                    </div>
                    <div className="flex items-start flex-col sm:flex-row gap-10">
                        <h3 className="text-xl font-bold flex-[1]">
                            Product Care
                        </h3>
                        <ul className="flex-[3] tracking-normal">
                            {toShowData[0]?.care?.map((item, i) => {
                                return (
                                    <li
                                        key={i + 1}
                                        className="flex items-center gap-4"
                                    >
                                        <FaCircle className="text-xs" />
                                        <span>{item}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
