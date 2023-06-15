import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CartCounter = ({ quantity }: { quantity: number }) => {
    const [counter, setCounter] = useState<number>(quantity);
    return (
        <div className="flex items-center gap-2">
            <Button
                className="rounded-full text-white bg-[#212121] hover:text-white hover:bg-[#212121]"
                onClick={() =>
                    setCounter((prev) => {
                        if (prev !== 0) {
                            return prev - 1;
                        }
                        return prev;
                    })
                }
            >
                -
            </Button>
            <span className="font-medium text-2xl">{counter}</span>
            <Button
                className="rounded-full text-white bg-[#212121] hover:text-white hover:bg-[#212121]"
                onClick={() => setCounter((prev) => prev + 1)}
            >
                +
            </Button>
        </div>
    );
};

export default CartCounter;
