'use client';
import { Navbar } from "./components/Navbar";
import { FontList } from "./components/FontList";
import { useState } from "react";
import translate from "./utils/devnagari";
import { fontData } from "./data";
import { IFont } from "./types/main";

export default function Home() {
  const [previewText, setPreviewText] = useState<string>("");
  const [originalText, setOriginalText] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

  const [fonts, setFonts] = useState<IFont[]>(fontData);

  const filterTextChange = (e: any) => {
    const value = e.target.value
    setFilterText(value);

    if (!value) { setFonts(fontData) } else {
      // filter fontData
      const filteredFont = fontData.filter((font) => {
        return font.name.toLowerCase().includes(filterText.toLowerCase());
      })
      setFonts(filteredFont);
    }
  }

  const previewTextChange = (e: any) => {
    setOriginalText(e.target.value);
    var unicode = translate(e.target.value);
    setPreviewText(unicode);
    console.log(previewText);
  }
  return (
    <>
      <Navbar filterText={filterText} filterTextChange={filterTextChange} />

      <div className="container mt-[100px]">
        <div className="w-full bg-neutral-100 px-4 py-5 rounded-xl">
          <input type="text" placeholder="Preview text here" className={`bg-transparent outline-none placeholder:text-neutral-600 w-full`} value={originalText} onChange={previewTextChange} />
          <span className="text-sm font-bold">{previewText}</span>
        </div>
        <div className="mt-6">
          {
            fonts.map((font, index) => (
              <FontList key={index} font={font} previewText={previewText} />
            ))
          }
        </div>
      </div>
    </>
  );
}
