import { useEffect, useRef, useState } from "react"
import { IFilterComponent } from "../types/main"
import { Dropdown } from "./Dropdown"
import { FontWeightDropdown } from "./FontWeightDropdown"

export const FilterComponent = ({ enableVoiceInput, isListening, previewText, originalText, previewTextChange, fontSize, setFontSize, minimumStyles, setMinimumStyles, hasRecongnitionSupport, encoding, setEncoding }: IFilterComponent) => {

    const rangeSlider = useRef<HTMLInputElement>(null)
    const previewRef = useRef<HTMLDivElement>(null)

    const [inView, setInView] = useState<boolean>(true);

    const availableFontSize = ['12', '16', '24', '32', '40', '64', '98', '128']
    const availableEncodingValue = ['any', 'unicode', 'preeti']
    const availableFontWeight = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             setInView(entry.isIntersecting);
    //             const { intersectionRect } = entry
    //             console.log(intersectionRect.x)
    //         });
    //     });

    //     if (previewRef.current) {
    //         observer.observe(previewRef.current);
    //     }

    //     return () => {
    //         if (previewRef.current) {
    //             observer.unobserve(previewRef.current);
    //         }
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
          if (previewRef.current) {
            const rect = previewRef.current.getBoundingClientRect();
            const isVisible = (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            // console.log(isVisible)
            setInView(isVisible);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        // Initial check on component mount
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        if (rangeSlider.current) {
            const progress = (fontSize / parseInt(availableFontSize[availableFontSize.length - 1])) * 100
            rangeSlider.current.style.background = `linear-gradient(to right, #D11233 0%, #D11233 ${progress}%, #e5e5e5 ${progress}%, #e5e5e5 100%)`
        }
    }, [fontSize])

    return (
        <>
            <div ref={previewRef}></div>
            <div className={`w-fit lg:flex items-center top-[84px] bg-white ${inView ? ' ' : 'fixed z-[9999]'}`}>
                <div className="flex items-center bg-neutral-50 gap-x-1 border border-neutral-200 h-16 lg:rounded-r-none lg:rounded-l-xl rounded-t-xl py-3 xl:w-[784px] lg:w-[584px] w-full">
                    {
                        hasRecongnitionSupport ?
                            <>
                                {
                                    isListening ?
                                        <div className="relative flex items-center justify-center h-14 w-14">
                                            <div className="p-1.5 rounded-full bg-primary-600 z-[10] absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16.4301 5.83798V11.408C16.2864 12.4703 15.7623 13.4445 14.9551 14.1499C14.1478 14.8553 13.1121 15.244 12.0401 15.244C10.9681 15.244 9.93244 14.8553 9.12519 14.1499C8.31794 13.4445 7.79389 12.4703 7.65015 11.408V5.83798C7.79389 4.77564 8.31794 3.80146 9.12519 3.09607C9.93244 2.39068 10.9681 2.00195 12.0401 2.00195C13.1121 2.00195 14.1478 2.39068 14.9551 3.09607C15.7623 3.80146 16.2864 4.77564 16.4301 5.83798Z" fill="white" />
                                                    <path d="M12.7901 17.998V20.498H15.6801C15.879 20.498 16.0698 20.5771 16.2104 20.7177C16.3511 20.8584 16.4301 21.0491 16.4301 21.248C16.4301 21.447 16.3511 21.6377 16.2104 21.7784C16.0698 21.919 15.879 21.998 15.6801 21.998H8.40011C8.2012 21.998 8.01043 21.919 7.86978 21.7784C7.72912 21.6377 7.65011 21.447 7.65011 21.248C7.65011 21.0491 7.72912 20.8584 7.86978 20.7177C8.01043 20.5771 8.2012 20.498 8.40011 20.498H11.2501V17.998C9.42006 17.8166 7.72316 16.9603 6.49008 15.596C5.257 14.2316 4.5761 12.457 4.5801 10.618C4.5801 10.4191 4.65912 10.2284 4.79977 10.0877C4.94042 9.94706 5.13119 9.86804 5.3301 9.86804C5.52902 9.86804 5.71979 9.94706 5.86044 10.0877C6.00109 10.2284 6.0801 10.4191 6.0801 10.618C6.0801 12.1881 6.70378 13.6939 7.81399 14.8041C8.92421 15.9143 10.43 16.5381 12.0001 16.5381C13.5702 16.5381 15.076 15.9143 16.1862 14.8041C17.2964 13.6939 17.9201 12.1881 17.9201 10.618C17.9201 10.4191 17.9991 10.2284 18.1397 10.0877C18.2804 9.94706 18.4712 9.86804 18.6701 9.86804C18.869 9.86804 19.0598 9.94706 19.2004 10.0877C19.3411 10.2284 19.4201 10.4191 19.4201 10.618C19.4241 12.457 18.7432 14.2316 17.5101 15.596C16.277 16.9603 14.5801 17.8166 12.7501 17.998H12.7901Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="bg-neutral-50 rounded-full animate-wiggle h-14 w-14 "></div>
                                        </div>
                                        :
                                        <button className="p-1.5 rounded-full bg-white border-[8px] border-neutral-50" onClick={enableVoiceInput}>
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
                                }

                            </>
                            :
                            <div className="p-1.5 rounded-full bg-white border-[12px] border-neutral-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M14.4856 14.7759C14.3491 14.7775 14.2149 14.7409 14.0982 14.6702C13.9815 14.5994 13.8869 14.4975 13.8252 14.3757C13.7328 14.2031 13.7125 14.001 13.7688 13.8134C13.825 13.6259 13.9533 13.4684 14.1254 13.3752C14.5501 13.1472 14.8981 12.7992 15.126 12.3746C15.1713 12.2885 15.233 12.2122 15.3079 12.15C15.3827 12.0878 15.469 12.0409 15.5619 12.0121C15.6548 11.9833 15.7526 11.9731 15.8494 11.9821C15.9463 11.9911 16.0405 12.019 16.1266 12.0644C16.2985 12.1578 16.4271 12.3147 16.485 12.5016C16.543 12.6885 16.5256 12.8907 16.4367 13.065C16.0744 13.7521 15.5129 14.3136 14.8258 14.6759C14.7223 14.7367 14.6055 14.771 14.4856 14.7759Z" fill="#737373" />
                                    <path d="M19.9086 10.6436C19.9039 11.729 19.665 12.8007 19.2083 13.7854C18.742 14.7618 18.0693 15.6254 17.2366 16.3164C16.4039 17.0074 15.4312 17.5093 14.3855 17.7876C14.0088 17.889 13.6238 17.956 13.235 17.9877V20.4991H16.1266C16.3256 20.4991 16.5164 20.5782 16.6572 20.7189C16.7979 20.8597 16.877 21.0505 16.877 21.2496C16.877 21.4486 16.7979 21.6395 16.6572 21.7802C16.5164 21.9209 16.3256 22 16.1266 22H8.84246C8.64343 22 8.4525 21.9209 8.31176 21.7802C8.17103 21.6395 8.09204 21.4486 8.09204 21.2496C8.09204 21.0505 8.17103 20.8597 8.31176 20.7189C8.4525 20.5782 8.64343 20.4991 8.84246 20.4991H11.7341V17.9877C11.5429 17.9743 11.3525 17.9509 11.1637 17.9177C10.9674 17.8819 10.7933 17.7695 10.6798 17.6053C10.5663 17.4411 10.5226 17.2386 10.5584 17.0422C10.5942 16.8458 10.7067 16.6717 10.8708 16.5582C11.035 16.4447 11.2375 16.401 11.4339 16.4369C11.7279 16.4888 12.0258 16.5155 12.3244 16.5169H12.6546C13.1076 16.509 13.558 16.4452 13.9954 16.3268C14.833 16.1048 15.6117 15.7018 16.2766 15.1461C16.9437 14.592 17.4805 13.8977 17.8489 13.1125C18.2172 12.3274 18.408 11.4708 18.4078 10.6036C18.4078 10.4045 18.4869 10.2137 18.6276 10.0729C18.7684 9.93221 18.9592 9.85315 19.1582 9.85315C19.3572 9.85315 19.5482 9.93221 19.6889 10.0729C19.8296 10.2137 19.9086 10.4045 19.9086 10.6036V10.6436Z" fill="#737373" />
                                    <path d="M21.0193 4.56021L16.6569 8.91263L11.0337 14.5358L5.03038 20.5392C4.88745 20.6764 4.69816 20.755 4.50005 20.7593C4.30109 20.7591 4.11044 20.6799 3.96985 20.5392C3.89905 20.4702 3.84277 20.3877 3.80435 20.2967C3.76593 20.2056 3.74609 20.1077 3.74609 20.0089C3.74609 19.91 3.76593 19.8121 3.80435 19.7211C3.84277 19.63 3.89905 19.5475 3.96985 19.4786L7.43175 16.0166L7.2516 15.8165C6.56498 15.1391 6.01962 14.3322 5.64693 13.4425C5.27424 12.5529 5.0817 11.5982 5.08045 10.6336C5.07913 10.5351 5.09721 10.4372 5.13371 10.3456C5.1702 10.2541 5.22434 10.1706 5.2931 10.1C5.36185 10.0294 5.4439 9.973 5.53444 9.93408C5.62499 9.89516 5.72231 9.8745 5.82086 9.8732C6.01908 9.87579 6.20845 9.95568 6.34862 10.0959C6.4888 10.236 6.56869 10.4254 6.57128 10.6236C6.58509 12.1942 7.22214 13.695 8.3423 14.7959L8.48239 14.956L9.33284 14.1156C9.08444 13.8872 8.8659 13.6283 8.68245 13.3451C8.31567 12.781 8.11146 12.1267 8.09216 11.454V5.85092C8.12968 5.29957 8.2774 4.76136 8.5266 4.26812C8.7758 3.77488 9.12137 3.33663 9.54292 2.97931C10.3938 2.34353 11.4275 2 12.4896 2C13.5518 2 14.5854 2.34353 15.4362 2.97931C16.2676 3.68628 16.7856 4.6934 16.8771 5.78087V6.57129L19.9688 3.47959C20.0378 3.40879 20.1202 3.35251 20.2113 3.31409C20.3023 3.27567 20.4003 3.25589 20.4991 3.25589C20.598 3.25589 20.6958 3.27567 20.7869 3.31409C20.878 3.35251 20.9604 3.40879 21.0294 3.47959C21.1013 3.55026 21.1583 3.6347 21.1969 3.7279C21.2355 3.8211 21.255 3.92114 21.2541 4.02201C21.2532 4.12288 21.2319 4.22255 21.1916 4.31502C21.1512 4.40749 21.0926 4.49089 21.0193 4.56021Z" fill="#737373" />
                                </svg>
                            </div>
                    }
                    {/* </button> */}
                    <div className="w-11/12">
                        <input type="text" placeholder={`${isListening ? "Listening..." : "Type preview text here or click on the mic icon to use audio typing..."}`} className={`bg-transparent outline-none placeholder:text-neutral-500 w-full`} value={originalText} onChange={previewTextChange} maxLength={80} />
                        <div className="text-nowrap overflow-hidden select-none">{previewText}</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="border-t border-b border-r border-neutral-200 p-3 h-16 lg:w-[196px] w-fit border lg:border-l-0 rounded-bl-xl lg:rounded-bl-none">
                        <span className="block lg:text-[13px] text-neutral-600 mb-1 text-xs">Font Size</span>
                        <div className="flex items-center gap-x-1">
                            <Dropdown dropdownValue={availableFontSize} value={fontSize} setValue={setFontSize} isFont={true} />
                            <input type="range" min="12" max="128" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-[100px] rangeSlider" ref={rangeSlider} />
                        </div>
                    </div>
                    <div className="border-t border-b border-neutral-200 p-3 lg:w-[110px] h-16">
                        <span className="block lg:text-[13px] text-neutral-600 mb-1 text-xs">Encoding</span>
                        <Dropdown dropdownValue={availableEncodingValue} value={encoding} setValue={setEncoding} />
                    </div>
                    <div className=" border border-neutral-200 lg:rounded-r-xl p-3 lg:w-[110px] h-16 rounded-br-xl">
                        <span className="block text-[13px] text-neutral-600 mb-1">Font Weight</span>
                        <FontWeightDropdown dropdownValue={availableFontWeight} value={minimumStyles} setValue={setMinimumStyles} />
                    </div>
                </div>
            </div>
        </>
    )
}