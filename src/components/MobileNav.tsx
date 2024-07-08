import Image from "next/image"
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { 
    NavigationMenu, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList 
} from "@radix-ui/react-navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button";

function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Image src={"/assets/bars.svg"} width={24} height={24} alt="bars" />
            </SheetTrigger>
            <SheetContent>
                <div className="my-10">
                    <NavigationMenu>
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
                            <NavigationMenuItem className="w-full my-3">
                                <NavigationMenuLink className={`${buttonVariants({ variant: "outline" })} w-full`}>Contact us</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={"/"} legacyBehavior passHref><NavigationMenuLink className={`${buttonVariants({ variant: "default" })} w-full`}>Explore fonts</NavigationMenuLink></Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav