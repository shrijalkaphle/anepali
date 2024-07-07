import Link from "next/link";
import Image from 'next/image';
import { buttonVariants } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="container lg:flex justify-between items-center z-10 py-4">
                <Link href={"/"}>
                    <Image src="/assets/logo.svg" width={149} height={32} alt="logo" />
                </Link>
                <div>
                    <Link className={buttonVariants({ variant: "link" })} href={"/preeti-to-unicode/"}>Preeti to Unicode</Link>
                    <Link className={buttonVariants({ variant: "link" })} href={"/unicode-to-preeti/"}>Unicode to Preeti</Link>
                    <Link className={buttonVariants({ variant: "link" })} href={"/"} aria-disabled={true} tabIndex={-1}>Nepali Documents <small>(Coming Soon)</small> </Link>
                </div>
                <div className="flex items-center gap-x-2">
                    <Link className={buttonVariants({ variant: "outline" })} href={"/"}>Contact us</Link>
                    <Link className={buttonVariants({ variant: "default" })} href={"/"}>Explore fonts</Link>
                </div>
            </div>
        </nav>
    )
}