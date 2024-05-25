"use client";

import { IFont } from "../types/main";

export interface IFontList {
    previewText: string,
    font: IFont
    fontSize: number
}

export const FontList = ({ previewText, font, fontSize }: IFontList) => {
    const { name, styles, designer, fontClass, path } = font
    const downloadFont = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = './fonts/' + path;
        downloadLink.setAttribute("download", path);
        downloadLink.click();
    }

    const updateStyles = (e: any) => {
        const currentBorderColor = e.target.style.borderColor
        if(currentBorderColor === 'transparent'){
            e.target.style.borderColor = '#e5e5e5'
        }else{
            e.target.style.borderColor = 'transparent'
        }

        if(!e.target.previousSibling) return

        const previousBorderColor = e.target.previousSibling.style.borderColor
        if(previousBorderColor === 'transparent'){
            e.target.previousSibling.style.borderColor = '#e5e5e5'
        }else{
            e.target.previousSibling.style.borderColor = 'transparent'
        }
    }
    return (
        <>
            <div className="w-full p-4 border-b border-neutral-200 hover:bg-neutral-100 hover:rounded-lg font-list" onMouseEnter={updateStyles} onMouseLeave={updateStyles}>

                {/* font details */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2  w-2/3">
                        <span className="font-semibold whitespace-nowrap">{name}</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm whitespace-nowrap text-neutral-800">{styles} styles</span>
                        <span className="dot"> &middot; </span>
                        <span className="text-sm whitespace-nowrap truncate text-neutral-800">{designer}</span>
                    </div>

                    <button className="bg-white border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg items-center gap-x-2 flex text-sm w-[108px] hover:border-neutral-400" onClick={downloadFont}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.59239 9.79803C7.69995 9.93972 7.84467 10.0178 8.00001 10.0178C8.15536 10.0178 8.30008 9.93972 8.40701 9.79875L11.3671 6.0525C11.477 5.90753 11.5075 5.76731 11.453 5.65763C11.3986 5.54794 11.2685 5.48753 11.0866 5.48753H9.95348C9.64517 5.48753 9.39429 5.23678 9.39429 4.92841V1.36441C9.39429 1.00119 9.09892 0.705688 8.73576 0.705688H7.26429C6.90114 0.705688 6.60576 1.00119 6.60576 1.36441V4.92844C6.60576 5.23681 6.35489 5.48756 6.04651 5.48756H4.91339C4.73161 5.48756 4.60151 5.54797 4.54701 5.65766C4.49254 5.76731 4.52304 5.90756 4.63358 6.05325L7.59239 9.79803Z" fill="#737373" />
                            <path d="M15.9979 11.2551L14.4966 6.25073H12.6813L11.7987 7.84089H12.9314L13.8969 11.2197H2.10313L3.06853 7.84089H4.20122L3.31866 6.25073H1.50334L0 11.2694V14.4992C0 14.9377 0.356656 15.2943 0.795031 15.2943H15.205C15.6433 15.2943 16 14.9376 16 14.4992V12.7601L15.9979 11.2551Z" fill="#737373" />
                        </svg>
                        <span className="font-medium">Get Font</span>
                    </button>
                </div>

                {/* font preview */}
                <div className="mt-2 truncate">
                    <span className={`text-preview ${fontClass}`} style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize*1.5}px` }}>
                        {
                            (previewText && previewText != " ") ? previewText : "काठमाडौंको गल्लीहरूमा एउटा चालकबिहीन ट्याक्सी दौडिरहेको छ।"
                        }
                    </span>
                </div>
            </div>
        </>
    )
}