import { CiSearch } from "react-icons/ci";
import { Input } from "./Input";

export const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-7.5">
                <img src="/logo.png" alt="logo" className="h-10" />
                <div id="search" className="bg-neutral-100 rounded-xl px-4 py-3.5 flex gap-x-3 items-center w-1/2">
                    <CiSearch className="text-neutral-600 h-5 w-5"/>
                    <Input placeholder="Search fonts" type="search"/>
                </div>
            </div>
        </nav>
    )
}