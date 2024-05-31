import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="container mt-[131px] my-10">
                <div className="rounded-lg bg-neutral-50 h-[136px] flex items-center justify-center">
                    Ad Space
                </div>
                <div className="mt-10 rounded-lg bg-neutral-50 p-4">
                    The fonts presented on this website are their authors&#39; property, and are either freeware, shareware, demo versions or public domain. Please look at the readme-files in the archives or check the indicated author&#39;s website for details, and contact him/her if in doubt. If no author/license is indicated that&#39;s because we don&#39;t have information, that doesn&#39;t mean it&#39;s free.
                </div>
            </div>
            <hr />
            <div className="container my-10 flex justify-between">
                <div className="w-1/3">
                    <img src="/logo.png" alt="aNepali" className="h-8" />
                    <span className="mt-5 block">aNepali is a platform dedicated to improving experience of Nepalese community in the Internet. </span>
                </div>
                <div className="flex justify-between w-1/2">
                    <ul>
                        <li className="font-semibold">aNepali Services</li>
                        <li className="my-3 text-neutral-800">Nepali Typography</li>
                        {/* <li className="my-3 text-neutral-600 flex items-center gap-x-2">
                            Nepali Typing Practice
                            <div className="rounded-full py-1 px-2 border border-neutral-200 flex items-center gap-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="3" fill="#A3A3A3" stroke="#D4D4D4" stroke-width="2" />
                                </svg>
                                <span>Comming Soon</span>
                            </div>
                        </li> */}
                        <li className="my-3 text-neutral-800">
                            <Link href="/unicode-to-preeti">Unicode to Preeti</Link>
                        </li>
                        {/* <li className="my-3 text-neutral-600 flex items-center gap-x-2">
                            Nepali Voice Typing
                            <div className="rounded-full py-1 px-2 border border-neutral-200 flex items-center gap-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="3" fill="#A3A3A3" stroke="#D4D4D4" stroke-width="2" />
                                </svg>
                                <span>Comming Soon</span>
                            </div>
                        </li> */}
                    </ul>
                    <ul>
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