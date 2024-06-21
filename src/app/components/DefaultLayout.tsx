import { Navbar } from "./Navbar"

interface IDefaultLayout {
    children: JSX.Element
}

export default function DefaultLayout({ children }: IDefaultLayout) {
    return (
        <div>
            <Navbar />
            <div className="container mt-[140px]">
                {children}
            </div>
        </div>
    )

}