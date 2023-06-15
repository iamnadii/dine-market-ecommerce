import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="flex justify-between items-center mt-12">
            <div className="flex flex-col items-start gap-10">
                <span className="bg-[#e1edff] text-blue-700 rounded px-4 py-2 font-bold">
                    Sale 70%
                </span>
                <h1 className="text-[2.5rem] md:text-[3.5rem] text-[#212121] font-semibold leading-[4rem]">
                    An Industrial Take on Streetwear
                </h1>
                <p className="text-[1rem] text=[#666]">
                    Anyone can beat you but no one can beat your outfit as long{' '}
                    <br />
                    as you wear Dine outfits.
                </p>
                <Link href="/all-products">
                    <Button className="bg-[#212121] border-2 font-semibold text-white rounded-none px-10 py-6 hover:bg-white hover:text-[#212121] hover:border-[#212121] hover:border-2">
                        <FiShoppingCart className="text-2xl mr-2" />
                        Start Shopping
                    </Button>
                </Link>
                <div className="flex items-center justify-center sm:justify-start gap-20 mt-6 flex-wrap">
                    <Image
                        src="/assets/images/feature-1.webp"
                        alt="icon"
                        width={100}
                        height={35}
                    />
                    <Image
                        src="/assets/images/feature-2.webp"
                        alt="icon"
                        width={100}
                        height={35}
                    />
                    <Image
                        src="/assets/images/feature-3.webp"
                        alt="icon"
                        width={100}
                        height={35}
                    />
                    <Image
                        src="/assets/images/feature-4.webp"
                        alt="icon"
                        width={100}
                        height={35}
                    />
                </div>
            </div>
            <div className="bg-[#ffece3] rounded-full hidden lg:block">
                <Image
                    src="/assets/images/hero.webp"
                    alt="hero-image"
                    width={720}
                    height={670}
                    className="mt-[-15px]"
                />
            </div>
        </section>
    );
};

export default Hero;
