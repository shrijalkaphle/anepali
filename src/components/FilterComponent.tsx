import { IFilterComponentv2 } from "@/types/main"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { fontData } from "@/app/data";
import translate from "@/lib/devnagari";
import { Dropdown } from "./Dropdown";
import { FontWeightDropdown } from "./FontWeightDropdown";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import unidecode from "unidecode";

function FilterComponentv2({ setFonts, previewText, setPreviewText, fontSize, setFontSize }: IFilterComponentv2) {

    const { text, isListening, startListening, hasRecongnitionSupport, stopListening } = useSpeechRecognition();

    const rangeSlider = useRef<HTMLInputElement>(null)
    const previewRef = useRef<HTMLDivElement>(null)

    const [inView, setInView] = useState<boolean>(true);

    const [fontSearchText, setFontSearchText] = useState<string>("")
    const [originalText, setOriginalText] = useState<string>("")
    const [encoding, setEncoding] = useState<string>("any")
    const [minimumStyles, setMinimumStyles] = useState<number>(0)

    const availableFontSize = ['12', '16', '24', '32', '40', '64', '98', '128']
    const availableEncodingValue = ['any', 'unicode', 'preeti']
    const availableFontWeight = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    useEffect(() => {
        if (rangeSlider.current) {
            const progress = (fontSize / parseInt(availableFontSize[availableFontSize.length - 1])) * 100
            rangeSlider.current.style.background = `linear-gradient(to right, #D11233 0%, #D11233 ${progress}%, #e5e5e5 ${progress}%, #e5e5e5 100%)`
        }
    }, [fontSize])

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
                console.log(isVisible)
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
        setPreviewText(text);
        setOriginalText(unidecode(text));
    }, [text])

    const enableVoiceInput = () => {
        if (!hasRecongnitionSupport) {
            alert('Your browser has no Voice Recognition Support')
            return
        }
        if (!isListening) startListening()
    }

    const updateFontList = (e: any) => {
        const value = e.target.value
        setFontSearchText(value)
        let filteredFont = fontData
        if (value) filteredFont = fontData.filter((font) => {
            return font.name.toLowerCase().includes(value.toLowerCase())
        })

        if (minimumStyles) filteredFont = filteredFont.filter((font) => {
            return font.styles >= minimumStyles
        })

        if (encoding && encoding !== 'any') filteredFont = filteredFont.filter((font) => {
            return font.encoding == encoding
        })
        setFonts(filteredFont)
    }

    const updatePreviewText = (e: any) => {
        const text = e.target.value
        setOriginalText(text)
        var unicode = translate(text);
        setPreviewText(unicode);
    }

    const encodingChange = (value: string) => {
        setEncoding(value)

        let filteredFont
        // filter fonts list
        if (value === 'any') filteredFont = fontData

        else filteredFont = fontData.filter((font) => {
            return font.encoding == value
        })

        if (fontSearchText) filteredFont = filteredFont.filter((font) => {
            return font.name.toLowerCase().includes(fontSearchText.toLowerCase())
        })

        if (minimumStyles) filteredFont = filteredFont.filter((font) => {
            return font.styles >= minimumStyles
        })

        setFonts(filteredFont)
    }

    const onMinimumStylesChange = (value: number) => {
        setMinimumStyles(value)
        let filteredFont = fontData.filter((font) => {
            return font.styles >= value
        })

        if (encoding && encoding !== 'any') filteredFont = filteredFont.filter((font) => {
            return font.encoding == encoding
        })

        if (fontSearchText) filteredFont = filteredFont.filter((font) => {
            return font.name.toLowerCase().includes(fontSearchText.toLowerCase())
        })

        console.log(encoding, minimumStyles, filteredFont, value)
        setFonts(filteredFont)
    }

    return (
        <>
            <div ref={previewRef}></div>
            <div className={`bg-white py-3.5 ${inView ? 'mt-[80px] ' : 'fixed z-[9999] top-0 inset-x-0'}`}>

                <div className="container">
                    {/* search component */}
                    <div className="w-full py-3.5 px-4 flex items-center gap-x-3 border border-input">
                        <Image src="/assets/search.svg" width={20} height={20} alt="search" />
                        <input type="text" placeholder="Search" className="w-full outline-none text-foreground" value={fontSearchText} onChange={updateFontList} />
                    </div>
                    <div className="w-full border border-t-0 border-input lg:flex">
                        <div className="p-2 lg:w-[65.33%] w-full flex items-center gap-x-3 border-input lg:border-r">
                            {
                                hasRecongnitionSupport ?
                                    <>
                                        {
                                            isListening ?
                                                <div className="relative flex items-center justify-center h-14 w-14">
                                                    <div className="p-1.5 rounded-full bg-gradient-to-t from-[#D11233] to-[#FF4565] z-[10] absolute" onClick={stopListening}>
                                                        <Image src="/assets/mic_active.svg" width={20} height={20} alt="filter" />
                                                    </div>
                                                    <div className="bg-neutral-50 rounded-full animate-wiggle h-14 w-14 "></div>
                                                </div>
                                                :
                                                <button className="p-1.5 rounded-full bg-white border-[8px] border-neutral-50" onClick={enableVoiceInput}>
                                                    <Image src="/assets/mic.svg" width={20} height={20} alt="filter" />
                                                </button>
                                        }
                                    </>
                                    :
                                    <button className="p-1.5 rounded-full bg-white border-[8px] border-neutral-50" onClick={enableVoiceInput}>
                                        <Image src="/assets/mic_disabled.svg" width={20} height={20} alt="filter" />
                                    </button>
                            }
                            <div className="flex-grow">
                                <input type="text" className="w-full outline-none text-foreground" placeholder={isListening ? 'Listening...' : 'Type preview text here or click on the mic icon to use audio typing...'} value={originalText} onChange={updatePreviewText} />
                                <div className="text-nowrap overflow-hidden select-none">{previewText}</div>
                            </div>
                        </div>
                        <div className="flex border-t border-input lg:border-0">
                            <div className="p-3 h-16 lg:w-[196px] w-1/3 border-r border-input">
                                <span className="block lg:text-[13px] text-neutral-600 mb-1 text-xs">Font Size</span>
                                <div className="flex items-center gap-x-1">
                                    <Dropdown dropdownValue={availableFontSize} value={fontSize} setValue={setFontSize} isFont={true} />
                                    <input type="range" min="12" max="128" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-[100px] rangeSlider" ref={rangeSlider} />
                                </div>
                            </div>
                            <div className="border-r border-input p-3 lg:w-[110px] w-1/3 h-16">
                                <span className="block lg:text-[13px] text-neutral-600 mb-1 text-xs">Encoding</span>
                                <Dropdown dropdownValue={availableEncodingValue} value={encoding} setValue={encodingChange} />
                            </div>
                            <div className=" p-3 lg:w-[110px] h-16 w-1/3">
                                <span className="block text-[13px] text-neutral-600 mb-1">Font Weight</span>
                                <FontWeightDropdown dropdownValue={availableFontWeight} value={minimumStyles} setValue={onMinimumStylesChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterComponentv2