import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    AiFillTwitterSquare,
    AiFillFacebook,
    AiFillLinkedin,
} from 'react-icons/ai';
import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <footer className="mt-24">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between container gap-10">
                <div className="flex flex-col items-center text-justify md:text-left md:items-start gap-3 w-full md:w-[35%]">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                            className="mb-1"
                        />
                    </Link>
                    <p>
                        Small, artisan label that offers a thoughtfully curated
                        collection of high quality everyday essentials made
                    </p>
                    <div className="flex items-center gap-3 text-4xl text-[#212121]">
                        <AiFillTwitterSquare className="cursor-pointer" />
                        <AiFillFacebook className="cursor-pointer" />
                        <AiFillLinkedin className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-wrap items-start justify-center gap-10 md:gap-0 sm:justify-between w-[60%]">
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <h3 className="font-bold text-xl">Company</h3>
                        <ul className="flex flex-col items-center sm:items-start gap-3">
                            <li>About</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <h3 className="font-bold text-xl">Support</h3>
                        <ul className="flex flex-col items-center sm:items-start gap-3">
                            <li>Support Center</li>
                            <li>24/7 Service</li>
                            <li>Quick Chat</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <h3 className="font-bold text-xl">Contact</h3>
                        <ul className="flex flex-col items-center sm:items-start gap-3">
                            <li>+1&nbsp;&#40;456&#41;-247920</li>
                            <li>dinemarket@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Separator className="mt-20 bg-[#212121]" />
            <div className="py-4 container text-center">
                <p>Copyright &copy; 2023 Dine Market</p>
            </div>
        </footer>
    );
};

export default Footer;
