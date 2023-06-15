import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Features = () => {
    return (
        <section className="mt-24 flex flex-col gap-6">
            <div className="flex justify-center xl:justify-end">
                <h2 className="text-[2rem] sm:text-[2.75rem] w-[100%] sm:w-[80%] xl:w-[45%] leading-[55px] font-bold px-10 py-4 text-[#212121]">
                    Unique and Authentic Vintage Designer Jewellery
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-[36rem] xxs:gap-[27rem] sm:gap-[20rem] md:gap-[20rem] lg:grid-cols-2 lg:gap-20">
                <div className="relative mt-6">
                    <div className="z-[1]">
                        <h2 className="text-[3.25rem] sm:text-[5rem] md:text-[6.875rem] font-extrabold absolute leading-[160px] sm:leading-[110px] opacity-10">
                            Different from others
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-10 justify-center items-center absolute z-[2]">
                        <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
                            <h3 className="text-lg font-bold">
                                Using Good Quality Materials
                            </h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
                            <h3 className="text-lg font-bold">
                                100% Handmade Products
                            </h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
                            <h3 className="text-lg font-bold">
                                Modern Fashion Design
                            </h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
                            <h3 className="text-lg font-bold">
                                Discount for Bulk Orders
                            </h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row gap-10">
                    <Image
                        src="/assets/images/product-4.webp"
                        alt="feature-image"
                        width={280}
                        height={300}
                    />
                    <div className="flex flex-col items-center sm:items-start gap-5">
                        <h4 className="text-justify">
                            This piece is ethically crafted in our small
                            family-owned workshop in Peru with unmatched
                            attention to detail and care. The Natural color is
                            the actual natural color of the fiber, undyed and
                            100% traceable.
                        </h4>
                        <Link href="/all-products">
                            <Button className="bg-[#212121] border-2 font-semibold text-white rounded-none px-10 py-6 hover:bg-white hover:text-[#212121] hover:border-[#212121] hover:border-2">
                                See All Products
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
