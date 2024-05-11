import { CiSearch } from "react-icons/ci";
import { Input } from "./Input";

interface INavbar {
    filterTextChange: (e: any) => void;
    filterText: string;
}

export const Navbar = ({ filterText, filterTextChange }: INavbar) => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50">
            <div className="py-4 blur-container w-full h-full relative">
                <div className="container lg:flex justify-between items-center z-10">
                    <img src="/logo.png" alt="logo" className="h-10" />
                    <div id="search" className="bg-neutral-100 rounded-xl px-4 py-3.5 flex gap-x-3 items-center lg:w-1/2 mt-4 lg:mt-0">
                        <CiSearch className="text-neutral-600 h-5 w-5" />
                        <Input placeholder="Search fonts" type="search" value={filterText} onChange={filterTextChange} customClass="w-full" />
                    </div>
                </div>
                <div className="background absolute inset-0 -z-10 bg-white/80 backdrop-blur-md"></div>
            </div>
        </nav>
    )
}