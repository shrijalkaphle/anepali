import { useEffect, useRef } from "react"
import { IFilterComponent } from "../types/main"
import { Dropdown } from "./Dropdown"
import { FontWeightDropdown } from "./FontWeightDropdown"

export const FilterComponent = ({ enableVoiceInput, isListening, previewText, originalText, previewTextChange, fontSize, setFontSize, minimumStyles, setMinimumStyles }: IFilterComponent) => {

    const rangeSlider = useRef<HTMLInputElement>(null)
    const availableFontSize = ['12', '16', '24', '32', '40', '64', '98', '128']
    const availableEncodingValue = ['unicode', 'others']
    const availableFontWeight = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    useEffect(() => {
        if(rangeSlider.current) {
            const progress = (fontSize / parseInt(availableFontSize[availableFontSize.length - 1])) * 100
            rangeSlider.current.style.background = `linear-gradient(to right, #D11233 0%, #D11233 ${progress}%, #e5e5e5 ${progress}%, #e5e5e5 100%)`
        }
    }, [fontSize])

    return (
        <div className="w-full flex items-center">
            <div className="flex items-center gap-x-3 bg-neutral-100 w-full border border-neutral-200 h-16 rounded-l-xl p-3">
                <button className="bg-white p-1.5 rounded-full" onClick={enableVoiceInput}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.43 5.83798V11.408C16.2863 12.4703 15.7622 13.4445 14.955 14.1499C14.1477 14.8553 13.112 15.244 12.04 15.244C10.968 15.244 9.93231 14.8553 9.12506 14.1499C8.31781 13.4445 7.79376 12.4703 7.65002 11.408V5.83798C7.79376 4.77564 8.31781 3.80146 9.12506 3.09607C9.93231 2.39068 10.968 2.00195 12.04 2.00195C13.112 2.00195 14.1477 2.39068 14.955 3.09607C15.7622 3.80146 16.2863 4.77564 16.43 5.83798Z" fill="url(#paint0_linear_64_355)" />
                        <path d="M12.79 17.998V20.498H15.68C15.8789 20.498 16.0697 20.5771 16.2103 20.7177C16.351 20.8584 16.43 21.0491 16.43 21.248C16.43 21.447 16.351 21.6377 16.2103 21.7784C16.0697 21.919 15.8789 21.998 15.68 21.998H8.39998C8.20107 21.998 8.0103 21.919 7.86965 21.7784C7.72899 21.6377 7.64998 21.447 7.64998 21.248C7.64998 21.0491 7.72899 20.8584 7.86965 20.7177C8.0103 20.5771 8.20107 20.498 8.39998 20.498H11.25V17.998C9.41993 17.8166 7.72303 16.9603 6.48995 15.596C5.25687 14.2316 4.57597 12.457 4.57997 10.618C4.57997 10.4191 4.65899 10.2284 4.79964 10.0877C4.94029 9.94706 5.13106 9.86804 5.32997 9.86804C5.52889 9.86804 5.71966 9.94706 5.86031 10.0877C6.00096 10.2284 6.07997 10.4191 6.07997 10.618C6.07997 12.1881 6.70365 13.6939 7.81386 14.8041C8.92408 15.9143 10.4299 16.5381 12 16.5381C13.5701 16.5381 15.0759 15.9143 16.1861 14.8041C17.2963 13.6939 17.92 12.1881 17.92 10.618C17.92 10.4191 17.999 10.2284 18.1396 10.0877C18.2803 9.94706 18.4711 9.86804 18.67 9.86804C18.8689 9.86804 19.0597 9.94706 19.2003 10.0877C19.341 10.2284 19.42 10.4191 19.42 10.618C19.424 12.457 18.7431 14.2316 17.51 15.596C16.2769 16.9603 14.58 17.8166 12.75 17.998H12.79Z" fill="#D11233" />
                        <defs>
                            <linearGradient id="paint0_linear_64_355" x1="12.04" y1="2.00195" x2="12.04" y2="15.244" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#62A8F4" />
                                <stop offset="1" stopColor="#007AFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <div className="w-full">
                    <input type="text" placeholder={`${isListening ? "Listening..." : "Type preview text here or click on the mic icon to use audio typing..."}`} className={`bg-transparent outline-none placeholder:text-neutral-500 w-full`} value={originalText} onChange={previewTextChange} />
                    <span>{previewText}</span>
                </div>
            </div>
            <div className="border-t border-b border-r border-neutral-200 p-3 h-16">
                <span className="block text-[13px] text-neutral-600 mb-1">Font Size</span>
                <div className="flex items-center gap-x-1">
                    {/* <select name="" id="">
                        o
                    </select> */}
                    <Dropdown dropdownValue={availableFontSize} value={fontSize} setValue={setFontSize} isFont={true}/>
                    <input type="range" min="12" max="128" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-[100px] rangeSlider" ref={rangeSlider}/>
                </div>
            </div>
            <div className="border-t border-b border-neutral-200 p-3 w-[110px] h-16">
                <span className="block text-[13px] text-neutral-600 mb-1">Encoding</span>
                <Dropdown dropdownValue={availableEncodingValue} value={'unicode'} setValue={() => {}}/>
            </div>
            <div className=" border border-neutral-200 rounded-r-xl p-3 w-[160px] h-16">
                <span className="block text-[13px] text-neutral-600 mb-1">Font Weight</span>
                <FontWeightDropdown dropdownValue={availableFontWeight} value={minimumStyles} setValue={setMinimumStyles}/>
            </div>
        </div>
    )
}