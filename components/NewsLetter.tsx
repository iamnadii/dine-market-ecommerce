import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsLetter = () => {
    return (
        <section className="mt-28 py-10 flex flex-col items-center justify-center text-center sm:text-left gap-4 relative">
            <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6.875rem] font-extrabold absolute leading-[110px] opacity-10 z-[1]">
                Newsletter
            </h2>
            <h3 className="text-[2rem] text-[#212121] font-bold">
                Subscribe Our Newsletter
            </h3>
            <p className="text-base font-light mb-2">
                Get the latest information and promo offers directly
            </p>
            <div
                className="flex flex-col gap-3 sm:flex-row w-full max-w-md items-center
            z-[2]"
            >
                <Input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-white rounded-none border-2 border-black focus-visible:ring-transparent"
                />
                <Button className="w-full bg-[#212121] border-2 border-[#212121] text-white rounded-none text-xs sm:w-[9rem]  hover:bg-[#212121] hover:text-white hover:border-[#212121] hover:border-2">
                    Get Started
                </Button>
            </div>
        </section>
    );
};

export default NewsLetter;
