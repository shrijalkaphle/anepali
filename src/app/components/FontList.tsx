"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IFont } from "../types/main";

export interface IFontList {
    previewText: string,
    font: IFont
}

export const FontList = ({ previewText, font }: IFontList) => {
    const { name, styles, designer } = font
    const [isHover, setIsHover] = useState<boolean>(false);
    const downloadFont = () => {
        alert("Hello! Welcome to my channel")
    }
    return (
        <>
            <div className="w-full p-4 border-b border-neutral-200 hover:bg-neutral-50" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

                {/* font details */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <span className="font-semibold">{name}</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm">{styles} styles</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm">{designer}</span>
                    </div>

                    <button className={`bg-gradient-to-b from-[#FF4565] to-[#D11233] text-white px-3 py-1.5 rounded-lg items-center gap-x-1.5 flex ${isHover ? 'opacity-100' : 'opacity-0'}`} onClick={downloadFont}>
                        <FaDownload />
                        <span className="font-medium text-sm">Get Font</span>
                    </button>
                </div>

                {/* font preview */}
                <div className="mt-2">
                    <span className="font-medium text-[40px] leading-[56px]">
                        {
                            previewText ? previewText : "काठमाडौंको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।"
                        }
                    </span>
                </div>
            </div>
        </>
    )
}