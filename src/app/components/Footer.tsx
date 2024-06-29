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
                        <Link href="/"><li className="my-3 text-neutral-800">Nepali Typography</li></Link>
                        <Link href="/unicode-to-preeti"><li className="my-3 text-neutral-800">Unicode to Preeti Converter</li></Link>

                        {/* <li className="my-3 text-neutral-600 flex items-center gap-x-2">
                            Nepali Typing Practice
                            <div className="rounded-full py-1 px-2 border border-neutral-200 flex items-center gap-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="3" fill="#A3A3A3" stroke="#D4D4D4" strokeWidth="2" />
                                </svg>
                                <span>Comming Soon</span>
                            </div>
                        </li> */}
                        {/* <li className="my-3 text-neutral-800">
                            <Link href="/unicode-to-preeti">Unicode to Preeti</Link>
                        </li> */}
                        {/* <li className="my-3 text-neutral-600 flex items-center gap-x-2">
                            Nepali Voice Typing
                            <div className="rounded-full py-1 px-2 border border-neutral-200 flex items-center gap-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="3" fill="#A3A3A3" stroke="#D4D4D4" strokeWidth="2" />
                                </svg>
                                <span>Comming Soon</span>
                            </div>
                        </li> */}
                    </ul>
                    <ul className="mt-10 lg:mt-0">
                        <li className="font-semibold">aNepali</li>
                        <li className="my-3 text-neutral-800">Blog articles</li>
                        <li className="my-3 text-neutral-800">About</li>
                        <li className="my-3 text-neutral-800">Contact us : <a href="mailto:info@anepali.com" className="text-blue-700">info@anepali.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}