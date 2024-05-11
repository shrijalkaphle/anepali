import { CiSearch } from "react-icons/ci";
import { Input } from "./Input";

interface INavbar {
    filterTextChange: (e: any) => void;
    filterText: string;
}

export const Navbar = ({filterText, filterTextChange}: INavbar) => {
    return (
        <nav className="py-4 fixed inset-x-0 top-0 z-50 bg-white/90">
            <div className="container flex justify-between items-center">
                <img src="/logo.png" alt="logo" className="h-10" />
                <div id="search" className="bg-neutral-100 rounded-xl px-4 py-3.5 flex gap-x-3 items-center w-1/2">
                    <CiSearch className="text-neutral-600 h-5 w-5"/>
                    <Input placeholder="Search fonts" type="search" value={filterText} onChange={filterTextChange} customClass="w-full"/>
                </div>
            </div>
        </nav>
    )
}