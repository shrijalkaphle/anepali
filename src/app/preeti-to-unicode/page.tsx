'use client';

import { useEffect, useState } from "react";
import convertUnicodeToPreeti from "@/lib/preeti";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function UnicodeToPreetiPage() {

    const [unicodeText, setUnicodeText] = useState<string>("");
    const [preetiText, setPreetiText] = useState<string>("");

    const preetiToUnicode = () => {
        const unicode = convertUnicodeToPreeti(unicodeText);
        setUnicodeText(unicode);
    }

    const onPreetiChange = (e: any) => {
        const text = e.target.value
        setPreetiText(text)
    }

    useEffect(() => {
        preetiToUnicode()
    }, [preetiText])

    return (
        <div className="container">
            <Head>
                <title>Preeti to Unicode - aNepali</title>
                <meta name="title" content="Preeti to Unicode - aNepali" />
                <meta name="description" content="Convert your Nepali text from Preeti to Unicode encoding format." />
            </Head>
            <div className="mt-11">
                <h1 className="font-semibold text-[40px] leading-[48px]">Preeti to Unicode <span className="bg-gradient-to-t from-[#D11233] to-[#FF4565] bg-clip-text text-transparent">Converter</span></h1>
                <p className="mt-5 text-slate-600 lg:w-[580px]">
                    Convert your Nepali text from Preeti to Unicode encoding format.
                </p>
            </div>

            <div className="my-[60px] flex gap-x-2">
                <div className="w-[570px]">
                    <div className="px-4 py-3 border border-slate-200 rounded-[10px] text-slate-600 font-medium">Preeti Text</div>

                    {/* text area */}
                    <div className="w-full border rounded-lg border-slate-200 h-[480px] mt-6 flex flex-col ">

                        <textarea className="w-full resize-none outline-none p-5 flex-grow font-old_nepali text-[26px]" placeholder="a'6jnsf] un\nLx¿df Pp6f rfnslaxLg 6\ofS;L bf}l8/x]sf] 5." value={preetiText} onChange={onPreetiChange}></textarea>
                    </div>
                </div>
                <div className="p-2.5">
                    <Link href={"/unicode-to-preeti/"}>
                        <Image src="/assets/change.svg" width={24} height={24} alt="change" />
                    </Link>
                </div>
                <div className="w-[570px]">
                    <div className="px-4 py-3 border border-slate-200 rounded-[10px] text-slate-600 font-medium">Unicode Text</div>
                    {/* text area */}
                    <div className="w-full bg-slate-50 rounded-lg h-[480px] mt-6">
                        <textarea className="w-full h-[395px] resize-none outline-none p-5 bg-transparent text-[20px]" placeholder="बुटवलको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।" value={unicodeText} readOnly></textarea>
                        <div className="p-4">
                            <button className="text-sm px-3 py-2 rounded-[55px] bg-white font-medium flex items-center gap-x-1" onClick={() => navigator.clipboard.writeText(unicodeText)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.2723 6.07227H8.56931C7.68332 6.07227 6.96509 6.79532 6.96509 7.68727V16.094C6.96509 16.9859 7.68332 17.709 8.56931 17.709H15.2723C16.1582 17.709 16.8765 16.9859 16.8765 16.094V7.68727C16.8765 6.79532 16.1582 6.07227 15.2723 6.07227Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.035 6.07098V3.90602C13.035 3.47769 12.866 3.06691 12.565 2.76404C12.2642 2.46117 11.8562 2.29102 11.4307 2.29102H4.72774C4.30228 2.29102 3.89424 2.46117 3.59339 2.76404C3.29255 3.06691 3.12354 3.47769 3.12354 3.90602V12.3128C3.12354 12.7411 3.29255 13.1518 3.59339 13.4547C3.89424 13.7576 4.30228 13.9278 4.72774 13.9278H6.96496" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Copy Results</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}