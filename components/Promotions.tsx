import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Promotions = () => {
    return (
        <section className="flex flex-col gap-12 mt-24">
            <div className="text-center">
                <p className="text-blue-500 font-bold uppercase">Promotions</p>
                <h2 className="text-[2rem] text-[#212121] font-bold">
                    Our Promotion Events
                </h2>
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col gap-5 flex-6 flex-auto">
                    <div className="bg-[#D6D6D8] text-[#212121] flex flex-wrap text-center sm:text-left items-center justify-center sm:justify-between pt-3 sm:px-6">
                        <div>
                            <h3 className="uppercase font-bold text-[1.75rem]">
                                Get upto 60%
                            </h3>
                            <p className="text-[1.10rem]">
                                For the summer season
                            </p>
                        </div>
                        <Image
                            src="/assets/images/promo-1.webp"
                            alt="promotion"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="bg-[#212121] uppercase text-[#fff] px-6 flex flex-col items-center justify-center gap-2 py-8">
                        <h3 className="font-bold text-[1.75rem]">
                            Get 30% off
                        </h3>
                        <p className="text-[1rem]">Use promo code</p>
                        <Button className="bg-[#5a5a5a] uppercase px-8 py-4 hover:bg-white hover:text-[#5a5a5a]">
                            Dineweekendsale
                        </Button>
                    </div>
                </div>
                <div className="flex gap-5 flex-auto flex-wrap">
                    <div className="bg-[#EFE1C7] px-4 pt-6 flex-auto flex flex-col justify-center items-center sm:items-start">
                        <div className="text-left">
                            <h4>Flex Sweatshirt</h4>
                            <p>
                                <span className="line-through">$100.00</span>
                                &nbsp;<span className="font-bold">$75.00</span>
                            </p>
                        </div>
                        <Image
                            src="/assets/images/promo-2.webp"
                            alt="promotion"
                            width={230}
                            height={230}
                            className="mt-10"
                        />
                    </div>
                    <div className="bg-[#D7D7D9] px-4 pt-6 flex-auto flex flex-col justify-center items-center sm:items-start">
                        <div className="text-left">
                            <h4>Flex Push Button Bomber</h4>
                            <p>
                                <span className="line-through">$225.00</span>
                                &nbsp;<span className="font-bold">$190.00</span>
                            </p>
                        </div>
                        <Image
                            src="/assets/images/promo-3.webp"
                            alt="promotion"
                            width={230}
                            height={230}
                            className="mt-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotions;
