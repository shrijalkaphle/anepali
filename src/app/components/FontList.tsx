"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IFont } from "../types/main";

export interface IFontList {
    previewText: string,
    font: IFont
}

export const FontList = ({ previewText, font }: IFontList) => {
    const { name, styles, designer, fontClass, path } = font
    const downloadFont = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = './fonts/' + path;
        downloadLink.setAttribute("download", path);
        downloadLink.click();
    }
    return (
        <>
            <div className="w-full p-4 border-b border-neutral-200 hover:bg-neutral-50">

                {/* font details */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <span className="font-semibold">{name}</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm">{styles} styles</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm">{designer}</span>
                    </div>

                    <button className={`bg-white border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg items-center gap-x-2 flex`} onClick={downloadFont}>
                        <FaDownload />
                        <span className="font-medium text-sm">Get Font</span>
                    </button>
                </div>

                {/* font preview */}
                <div className="mt-2">
                    <span className={`font-medium text-[40px] leading-[56px] ${fontClass}`}>
                        {
                            previewText ? previewText : "काठमाडौंको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।"
                        }
                    </span>
                </div>
            </div>
        </>
    )
}