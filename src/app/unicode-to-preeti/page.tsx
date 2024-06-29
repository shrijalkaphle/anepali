'use client';

import { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import convertUnicodeToPreeti from "../utils/preeti";
import translate from "../utils/devnagari";

import unidecode from 'unidecode';

export default function UnicodeToPreetiPage() {

    // static value
    const [originalText, setOriginalText] = useState<string>("");

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
            const wordsFiltered = words.filter((word : string) => word !== '')
            setUnicodeText(wordsFiltered.join(' '))
        }
        
        

    }
    useEffect(() => {
        unicodeToPreeti()
    }, [unicodeText])

    return (
        <DefaultLayout>
            <div>
                <div className="mt-4">
                    <h1 className="font-semibold text-[40px] leading-[48px]">Unicode to Preeti <span className="text-primary-600">Converter</span></h1>
                    <p className="mt-5 text-neutral-600 lg:w-[580px]">
                        Convert your Nepali text from Unicode to Preeti encoding format. Be sure to try out the voice typing feature for easy typing
                    </p>
                </div>

                <div className="my-[60px] flex gap-x-2">
                    <div className="w-[570px]">
                        <div className="px-4 py-3 border border-neutral-200 rounded-[10px] text-neutral-600 font-medium">Unicode Text</div>

                        {/* text area */}
                        <div className="w-full border rounded-lg border-neutral-200 h-[480px] mt-6 flex flex-col ">

                            <textarea className="w-full resize-none outline-none p-5 flex-grow" placeholder="बुटवलको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।" value={unicodeText} onChange={onUnicodeChange}></textarea>
                            <div className="p-4 flex items-center gap-x-4">
                                <button className="text-sm px-3 py-2 rounded-[55px] text-white bg-gradient-to-t from-[#007AFF] to-[#1AA2CE] font-medium flex items-center gap-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13.6919 4.86466V9.50634C13.5721 10.3916 13.1354 11.2034 12.4627 11.7913C11.79 12.3791 10.9269 12.703 10.0335 12.703C9.1402 12.703 8.27715 12.3791 7.60444 11.7913C6.93174 11.2034 6.49503 10.3916 6.37524 9.50634V4.86466C6.49503 3.97938 6.93174 3.16756 7.60444 2.57974C8.27715 1.99191 9.1402 1.66797 10.0335 1.66797C10.9269 1.66797 11.79 1.99191 12.4627 2.57974C13.1354 3.16756 13.5721 3.97938 13.6919 4.86466Z" fill="white" />
                                        <path d="M10.6583 14.9976V17.081H13.0667C13.2324 17.081 13.3914 17.1469 13.5086 17.264C13.6258 17.3813 13.6917 17.5402 13.6917 17.706C13.6917 17.8718 13.6258 18.0307 13.5086 18.148C13.3914 18.2651 13.2324 18.331 13.0667 18.331H7.00001C6.83425 18.331 6.67527 18.2651 6.55807 18.148C6.44085 18.0307 6.37501 17.8718 6.37501 17.706C6.37501 17.5402 6.44085 17.3813 6.55807 17.264C6.67527 17.1469 6.83425 17.081 7.00001 17.081H9.375V14.9976C7.84997 14.8465 6.43588 14.1329 5.40832 12.996C4.38075 11.859 3.81333 10.3801 3.81666 8.84762C3.81666 8.68187 3.88252 8.52296 3.99972 8.40571C4.11693 8.28851 4.27591 8.22266 4.44167 8.22266C4.60743 8.22266 4.76641 8.28851 4.88362 8.40571C5.00082 8.52296 5.06667 8.68187 5.06667 8.84762C5.06667 10.156 5.5864 11.4109 6.51157 12.336C7.43676 13.2612 8.69158 13.781 10 13.781C11.3084 13.781 12.5632 13.2612 13.4884 12.336C14.4136 11.4109 14.9333 10.156 14.9333 8.84762C14.9333 8.68187 14.9992 8.52296 15.1163 8.40571C15.2336 8.28851 15.3926 8.22266 15.5583 8.22266C15.7241 8.22266 15.8831 8.28851 16.0002 8.40571C16.1175 8.52296 16.1833 8.68187 16.1833 8.84762C16.1867 10.3801 15.6192 11.859 14.5917 12.996C13.5641 14.1329 12.15 14.8465 10.625 14.9976H10.6583Z" fill="white" />
                                    </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_513_97)">
                                <path d="M23.6401 6.16L18.84 1.36C18.36 0.88 17.64 0.88 17.16 1.36C16.68 1.84 16.68 2.56 17.16 3.04L19.92 5.8H6.00005C5.40005 5.8 4.80005 6.28 4.80005 7C4.80005 7.72 5.28005 8.2 6.00005 8.2H19.92L17.16 10.96C16.68 11.44 16.68 12.16 17.16 12.64C17.4 12.88 18.12 13.24 18.84 12.64L23.6401 7.84C24.3601 7.24 23.8801 6.28 23.6401 6.16Z" fill="#A3A3A3" />
                                <path d="M18.0001 15.8H4.08009L6.84009 13.04C7.32009 12.56 7.32009 11.84 6.84009 11.36C6.36009 10.88 5.64009 10.88 5.16009 11.36L0.360093 16.16C-0.359907 16.88 0.240093 17.72 0.360093 17.84L5.16009 22.64C5.40009 22.88 6.12009 23.24 6.84009 22.64C7.32009 22.16 7.32009 21.44 6.84009 20.96L4.08009 18.2H18.0001C18.7201 18.2 19.2001 17.72 19.2001 17C19.2001 16.28 18.7201 15.8 18.0001 15.8Z" fill="#A3A3A3" />
                            </g>
                            <defs>
                                <clipPath id="clip0_513_97">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-[570px]">
                        <div className="px-4 py-3 border border-neutral-200 rounded-[10px] text-neutral-600 font-medium">Preeti Text</div>
                        {/* text area */}
                        <div className="w-full bg-neutral-50 rounded-lg h-[480px] mt-6">
                            <textarea name="" id="" className="w-full h-[395px] resize-none outline-none p-5 bg-transparent font-preeti" placeholder="बुटवलको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।" value={preetiText} readOnly></textarea>
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
            </div>
        </DefaultLayout>
    )
}