'use client';

import Image from 'next/image';
import { productDataProp } from '@/lib/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SingleProductProps {
    data: productDataProp;
}
const SingleProduct: React.FC<SingleProductProps> = ({ data }) => {
    const { id, title, type, price, image, gender } = data;
    const pathName = usePathname();
    let ctgry = '',
        cstmTitle = title.toLowerCase().split(' ').join('-');
    if (gender === 1) ctgry = 'male';
    else if (gender === 2) ctgry = 'female';
    else if (gender === 3) ctgry = 'kids';

    return (
        <Link href={`/${ctgry}/${id}?name=${cstmTitle}&id=${id}`}>
            <div
                className={`font-bold flex flex-col items-start gap-3 scale-100 transition-transform duration-500 ease cursor-pointer ${
                    pathName === '/' && ' hover:scale-110'
                }`}
            >
                <Image
                    src={`/assets/images/${image}.png`}
                    alt="product-image"
                    width={400}
                    height={500}
                />
                <h4 className="text-lg">{title}</h4>
                {pathName !== '/' && (
                    <span className="text-md text-[#b1b1b1]">{type}</span>
                )}
                <p className="text-lg">${price}</p>
            </div>
        </Link>
    );
};

export default SingleProduct;
