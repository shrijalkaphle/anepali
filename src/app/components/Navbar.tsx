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
                    <div id="search" className="bg-neutral-100 rounded-xl px-4 py-3.5 flex gap-x-3 items-center lg:w-1/2 mt-4 lg:mt-0 text-neutral-600">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98567 15.6896C10.3118 15.6915 11.6085 15.3 12.712 14.565C13.8154 13.83 14.676 12.7844 15.1847 11.5605C15.6933 10.3365 15.8274 8.9893 15.5698 7.68921C15.3122 6.38915 14.6744 5.19466 13.7374 4.25689C12.8003 3.31912 11.606 2.68021 10.3055 2.421C9.00509 2.1618 7.65686 2.29394 6.43156 2.80071C5.20624 3.30748 4.15885 4.1661 3.42194 5.26795C2.68502 6.36979 2.29167 7.66533 2.29167 8.99063C2.29167 10.7658 2.99664 12.4684 4.25175 13.7244C5.50685 14.9805 7.20946 15.6873 8.98567 15.6896Z" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.7402 13.7426L17.7083 17.7084" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Input placeholder="Search fonts" type="search" value={filterText} onChange={filterTextChange} customClass="w-full" />
                    </div>
                </div>
                <div className="background absolute inset-0 -z-10 bg-white/80 backdrop-blur-md"></div>
            </div>
        </nav>
    )
}