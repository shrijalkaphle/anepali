'use client';
import { Navbar } from "./components/Navbar";
import { FontList } from "./components/FontList";
import { useState } from "react";
import { IFont } from "./types/main";
import translate from "./utils/devnagari";

export default function Home() {
  const [previewText, setPreviewText] = useState<string>("");
  const [originalText, setOriginalText] = useState<string>("");
  const loop = [1, 2, 3, 4, 5, 6, 7, 8]

  const fonts: IFont[] = [
    {
      name: "Noto Sans Devanagari",
      styles: 2,
      designer: "Google",
      fontLink: '',
      downloadLink: ''
    },
    {
      name: "Tiro Devanagari Sanskrit",
      styles: 2,
      designer: "Tiro Typeworks, John Hudson, Fiona Ross, Paul Hanslow",
      fontLink: '',
      downloadLink: ''
    }
  ]

  const previewTextChange = (e: any) => {
    setOriginalText(e.target.value);
    var unicode = translate(e.target.value);
    setPreviewText(unicode);
  }
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="w-full bg-neutral-100 px-4 py-5 rounded-xl mt-4">
          <input type="text" placeholder="Preview text here" className={`bg-transparent outline-none placeholder:text-neutral-600 w-full`} value={originalText} onChange={previewTextChange}/>
          <span className="text-sm font-bold">{previewText}</span>
        </div>
        
        {/* {nepaliscript(previewText)} */}
        <div>
          {
            fonts.map((font, index) => (
              <FontList key={index} font={font} previewText={previewText}/>
            ))
          }
        </div>
      </div>
    </>
  );
}
