'use client';

import translate from "@/lib/devnagari";
import convertUnicodeToPreeti from "@/lib/preeti";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function UnicodeToPreetiConverter() {
    const [unicodeText, setUnicodeText] = useState<string>("");
    const [preetiText, setPreetiText] = useState<string>("");

    const [previewText, setPreviewText] = useState<string>("");

    const unicodeToPreeti = () => {
        const preeti = convertUnicodeToPreeti(unicodeText);
        setPreetiText(preeti);
    }

    const onUnicodeChange = (e: any) => {
        const text = e.target.value
        setUnicodeText(text)

        const words = text.split(' ').pop()
        const unicode = translate(words);

        setPreviewText(unicode)

        // check if space pressed
        if (e.nativeEvent.data === ' ' && e.nativeEvent.inputType === "insertText") {
            const words = text.split(' ')
            const lastText = words[words.length - 2]
            const unicode = translate(lastText);
            words[words.length - 2] = unicode
            const wordsFiltered = words.filter((word: string) => word !== '')
            setUnicodeText(wordsFiltered.join(' '))
        }



    }
    useEffect(() => {
        unicodeToPreeti()
    }, [unicodeText])

    return (
        <div className="my-[60px] flex gap-x-2">
            <div className="w-[570px]">
                <div className="px-4 py-3 border border-slate-200 rounded-[10px] text-slate-600 font-medium">Unicode Text</div>

                {/* text area */}
                <div className="w-full border rounded-lg border-slate-200 h-[480px] mt-6 flex flex-col ">

                    <textarea className="w-full resize-none outline-none p-5 flex-grow text-[20px] bg-transparent" placeholder="बुटवलको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।" value={unicodeText} onChange={onUnicodeChange}></textarea>
                    <div className="p-4 flex items-center gap-x-4">
                        <button className="text-sm px-3 py-2 rounded-[55px] text-white bg-gradient-to-t from-[#007AFF] to-[#1AA2CE] font-medium flex items-center gap-x-1">
                            <Image src="/assets/mic_active.svg" width={20} height={20} alt="voice" />
                            <span>Voice Typing</span>
                        </button>
                        {
                            previewText && <>| {previewText}</>
                        }

                    </div>
                </div>
                <div className="text-sm font-medium text-gray-700 w-[570px]"><strong>Note:</strong> English to unicode conversion take space after typing one word! You can view the currently typing word preview beside <strong>Voice Typing</strong> button.</div>
            </div>
            <div className="p-2.5">
                <Link href={"/preeti-to-unicode/"}>
                    <Image src="/assets/change.svg" width={24} height={24} alt="change" />
                </Link>
            </div>
            <div className="w-[570px]">
                <div className="px-4 py-3 border border-slate-200 rounded-[10px] text-slate-600 font-medium">Preeti Text</div>
                {/* text area */}
                <div className="w-full bg-slate-50 rounded-lg h-[480px] mt-6">
                    <textarea className="w-full h-[395px] resize-none outline-none p-5 bg-transparent font-old_nepali text-[26px]" placeholder="a'6jnsf] uNnLx?df Pp6f rfnslaxLg 6\ofS;L bf}l8/x]sf] 5." value={preetiText} readOnly></textarea>
                    <div className="p-4">
                        <button className="text-sm px-3 py-2 rounded-[55px] bg-white font-medium flex items-center gap-x-1" onClick={() => navigator.clipboard.writeText(preetiText)}>
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
    )
}

export default UnicodeToPreetiConverter