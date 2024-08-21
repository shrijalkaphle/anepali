import UnicodeToPreetiConverter from "@/components/UnicodeToPreeti";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unicode to Preeti - aNepali",
    description: "Convert Unicode to Preeti text in real time. Use voice typing, type in Roman Nepali, or paste Unicode text and copy the Preeti result easily at anepali.com.",
    openGraph: {
        title: "Unicode to Preeti converter - aNepali",
        description: "Convert Unicode to Preeti text in real time. Use voice typing, type in Roman Nepali, or paste Unicode text and copy the Preeti result easily at anepali.com.",
        url: "https://anepali.com/unicode-to-preeti/",
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
        canonical: "https://anepali.com/unicode-to-preeti/",
    }
}

export default function UnicodeToPreetiPage() {
    return (
        <div className="container" style={{minHeight: 'calc(100vh - 350px)'}}>
            <div className="mt-32">
                <h1 className="font-semibold text-[40px] leading-[48px]">Unicode to Preeti <span className="bg-gradient-to-t from-[#D11233] to-[#FF4565] bg-clip-text text-transparent">Converter</span></h1>
                <p className="mt-5 text-slate-600 lg:w-[580px]">
                    Convert your Nepali text from Unicode to Preeti encoding format. Be sure to try out the voice typing feature for easy typing
                </p>
            </div>

            <UnicodeToPreetiConverter />
        </div>
    )
}