import PreetiToUnicodeConverter from "@/components/PreetiToUnicode";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preeti to Unicode - aNepali",
    description: "Convert Preeti to Unicode text in real time. Type in Roman Nepali, or paste Preeti text and copy the Unicode result easily at anepali.com.",
    openGraph: {
        title: "Preeti to Unicode - aNepali",
        description: "Convert Preeti to Unicode text in real time. Type in Roman Nepali, or paste Preeti text and copy the Unicode result easily at anepali.com.",
        url: "https://anepali.com/Unicode-to-unicode/",
        siteName: "aNepali",
        images: [
            {
                url: "https://anepali.com/assets/og_image.png"
            },
        ],
        locale: "en-US",
        type: "website",
    },
    icons: {
        icon: "/assets/favicon.png",
    },
    alternates: {
        canonical: "https://anepali.com/preeti-to-unicode/",
    }
}

export default function UnicodeToPreetiPage() {

    return (
        <div className="container" style={{minHeight: 'calc(100vh - 350px)'}}>
            <div className="mt-11">
                <h1 className="font-semibold text-[40px] leading-[48px]">Preeti to Unicode <span className="bg-gradient-to-t from-[#D11233] to-[#FF4565] bg-clip-text text-transparent">Converter</span></h1>
                <p className="mt-5 text-slate-600 lg:w-[580px]">
                    Convert your Nepali text from Preeti to Unicode encoding format.
                </p>
            </div>

            <PreetiToUnicodeConverter/>
        </div>
    )
}