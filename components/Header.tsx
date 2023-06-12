'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetPrimitive,
} from '@/components/ui/sheet';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Command, CommandInput } from '@/components/ui/command';

const SHEET_POSITIONS = ['top', 'right', 'bottom', 'left'] as const;

type SheetPosition = (typeof SHEET_POSITIONS)[number];

export function Header() {
    const [position, setPosition] = React.useState<SheetPosition>('left');
    return (
        <header className="flex items-center justify-between w-full py-6 lg:px-0">
            <Link href="/">
                <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="mb-1"
                />
            </Link>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/all-products" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                All
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/male" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Male
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/female" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Female
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/kids" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Kids
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="w-[30%] hidden sm:block">
                <Command className="rounded-lg border">
                    <CommandInput placeholder="What you are looking for..." />
                </Command>
            </div>
            <Link
                href="/cart"
                className="bg-[#F1F1F1] p-3 shadow-sm items-center justify-center rounded-full relative cursor-pointer hidden lg:flex"
            >
                <FiShoppingCart className="text-2xl" />
                <Badge
                    variant="destructive"
                    className="absolute text-[10px] px-[6px] top-[-6px] right-0"
                >
                    0
                </Badge>
            </Link>

            {/* Mobile Navigation */}
            <Sheet>
                <SheetTrigger asChild>
                    <HiMenuAlt3 className="text-[2rem] lg:hidden cursor-pointer" />
                </SheetTrigger>
                <SheetContent position={position} size="content">
                    <SheetTitle className="flex mt-[-12px]">
                        <Link
                            href="/cart"
                            className="bg-[#F1F1F1] p-3 shadow items-center justify-center rounded-full relative cursor-pointer flex"
                        >
                            <SheetPrimitive.Close>
                                <FiShoppingCart className="text-lg" />
                                <Badge
                                    variant="destructive"
                                    className="absolute text-[8px] px-[6px] top-[-6px] right-0"
                                >
                                    0
                                </Badge>
                            </SheetPrimitive.Close>
                        </Link>
                    </SheetTitle>
                    <SheetHeader>
                        <SheetDescription>
                            <ul className="font-bold flex flex-col items-center justify-start gap-6 mt-6 h-screen">
                                <Link href="/all-products">
                                    <SheetPrimitive.Close>
                                        <li className="cursor-pointer">All</li>
                                    </SheetPrimitive.Close>
                                </Link>
                                <Link href="/male">
                                    <SheetPrimitive.Close>
                                        <li className="cursor-pointer">Male</li>
                                    </SheetPrimitive.Close>
                                </Link>
                                <Link href="/female">
                                    <SheetPrimitive.Close>
                                        <li className="cursor-pointer">
                                            Female
                                        </li>
                                    </SheetPrimitive.Close>
                                </Link>
                                <Link href="/kids">
                                    <SheetPrimitive.Close>
                                        <li className="cursor-pointer">Kids</li>
                                    </SheetPrimitive.Close>
                                </Link>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
    );
}
