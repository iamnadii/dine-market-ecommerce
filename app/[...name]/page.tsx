'use client';

import { MdSentimentSatisfiedAlt } from 'react-icons/md';
import { productData, productDataProp } from '@/lib/data';
import SingleProduct from '@/components/SingleProduct';
import ProductInfo from '@/components/ProductInfo';

const page = ({
    params,
    searchParams,
}: {
    params: { name: string };
    searchParams: { id: string; name: string };
}) => {
    let filteredProducts: productDataProp[] = productData;
    const searchQuery: string = params?.name[0].toLowerCase();
    filteredProducts = filteredProducts.filter((product: productDataProp) => {
        if (searchQuery === 'all-products') {
            return product;
        } else if (searchQuery === 'male') {
            return product.gender === 1;
        } else if (searchQuery === 'female') {
            return product.gender === 2;
        } else if (searchQuery === 'kids') {
            return product.gender === 3;
        }
    });

    if (params.name.length > 1) {
        return <ProductInfo searchParams={searchParams} />;
    } else {
        return (
            <div>
                {filteredProducts?.length !== 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between place-items-center sm:place-items-start gap-10 lg:gap-20 mt-12">
                        {filteredProducts?.map((product: productDataProp) => {
                            return (
                                <SingleProduct
                                    key={product.id}
                                    data={product}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col gap-5 my-24 items-center justify-center text-[#212121]">
                        <MdSentimentSatisfiedAlt className="text-[5rem]" />
                        <h1 className="text-[2rem] text-center">
                            No products found.
                        </h1>
                    </div>
                )}
            </div>
        );
    }
};

export default page;
