import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="container my-10 lg:flex justify-between">
                <div className="lg:w-1/3 w-full">
                    <img src="/assets/logo.svg" alt="aNepali" className="h-8" />
                    <span className="mt-5 block">aNepali is a platform dedicated to improving experience of Nepalese community in the Internet. </span>
                </div>
                <div className="lg:flex justify-between lg:w-1/2 w-full mt-10 lg:mt-0">
                    <ul className="mt-10 lg:mt-0">
                        <li className="font-semibold">aNepali Services</li>
                        <Link href="/"><li className="my-3 text-slate-800">Nepali Typography</li></Link>
                        <Link href="/unicode-to-preeti/"><li className="my-3 text-slate-800">Unicode to Preeti Converter</li></Link>
                        <Link href="/preeti-to-unicode/"><li className="my-3 text-slate-800">Preeti to Unicode Converter</li></Link>
                    </ul>
                    <ul className="mt-10 lg:mt-0">
                        <li className="font-semibold">aNepali</li>
                        <li className="my-3 text-slate-800">Blog articles</li>
                        <li className="my-3 text-slate-800">About</li>
                        <li className="my-3 text-slate-800">Contact us : <a href="mailto:info@anepali.com" className="text-blue-700">info@anepali.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}