import Link from "next/link";
import Image from 'next/image';
import { buttonVariants } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MobileNav from "./MobileNav";

export const Navbar = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="container flex justify-between items-center z-10 py-4">
                    <Link href={"/"}>
                        <Image src="/assets/logo.svg" width={149} height={32} alt="logo" />
                    </Link>
                    <div className="hidden md:block">
                        <NavigationMenu className="bg-white w-full">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href={"/preeti-to-unicode/"} legacyBehavior passHref><NavigationMenuLink className={navigationMenuTriggerStyle()}>Preeti to Unicode</NavigationMenuLink></Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={"/unicode-to-preeti/"} legacyBehavior passHref><NavigationMenuLink className={navigationMenuTriggerStyle()}>Unicode to Preeti</NavigationMenuLink></Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nepali Documents <small>(Coming Soon)</small></NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="items-center gap-x-2 hidden md:flex">
                        <Link className={buttonVariants({ variant: "outline" })} href={"/"}>Contact us</Link>
                        <Link className={buttonVariants({ variant: "default" })} href={"/"}>Explore fonts</Link>
                    </div>
                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </nav>
        </>
    )
}