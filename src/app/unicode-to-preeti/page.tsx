'use client';
import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { unicodeToPreeti } from "../utils/preeti";

function UnicodeToPreeti() {

    const [text, setText] = useState<string>("Preview text")
    const [converted, setConverted] = useState<string>("")

    const convertToPreeti = () => {
        setConverted(unicodeToPreeti(text))
    }
    return (
        <>
            <Navbar />

            <div className="container mt-[140px]">
                <div className="font-semibold text-2xl text-center">Unicode to Preeti Converter</div>

                {/* input container */}
                <textarea cols={30} rows={10} className="border border-neutral-200 rounded-lg p-2 mt-5 w-full outline-none" placeholder="Paste your text here" value={text} onChange={(e) => setText(e.target.value)}></textarea>

                {/* convert button */}
                <div className="flex items-center justify-center">
                <button className="border border-neutral-200 rounded-xl py-2 px-4 mt-5 hover:bg-neutral-50" onClick={convertToPreeti}>Convert to Preeti</button>
                </div>

                {/* preview container */}
                <textarea cols={30} rows={10} className="border border-neutral-200 rounded-lg p-2 mt-5 w-full outline-none" placeholder="Paste your text here" readOnly value={converted} onChange={(e) => setConverted(e.target.value)}></textarea>
            </div>
        </>
    )
}


export default UnicodeToPreeti