'use client';
import { Navbar } from "./components/Navbar";
import { FontList } from "./components/FontList";
import { FilterComponent } from "./components/Filter";
import { useEffect, useState } from "react";
import translate from "./utils/devnagari";
import { fontData } from "./data";
import { IFont } from "./types/main";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { Loading } from "./components/Loading";

import unidecode from 'unidecode';

export default function Home() {

  // hhook
  const { text, isListening, startListening, hasRecongnitionSupport } = useSpeechRecognition();

  const [pageLoading, setPageLoading] = useState<boolean>(true)

  const [originalText, setOriginalText] = useState<string>("");
  const [previewText, setPreviewText] = useState<string>("");
  const [fontSearchText, setFontSearchText] = useState<string>("");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [fonts, setFonts] = useState<IFont[]>(fontData);

  // filter font data
  const [fontSize, setFontSize] = useState<number>(40)
  const [minimumStyles, setMinimumStyles] = useState<number>(0)

  const [encoding, setEncoding] = useState<string>("any")

  const filterSearchChange = (e: any) => {
    const value = e.target.value
    setFontSearchText(value);

    if (!value) { setFonts(fontData) } else {
      // filter fontData
      const filteredFont = fontData.filter((font) => {
        return font.name.toLowerCase().includes(fontSearchText.toLowerCase());
      })
      setFonts(filteredFont);
    }
  }

  useEffect(() => {
    window.innerWidth >= 1280 ? setFontSize(40) : (window.innerWidth >= 1024 ? setFontSize(36) : setFontSize(22))
    setPreviewText(text);
    setOriginalText(unidecode(text));
    setPageLoading(false)
  }, [text])

  const previewTextChange = (e: any) => {
    const text = e.target.value
    setOriginalText(text);
    var unicode = translate(text);
    setPreviewText(unicode);
  }

  const enableVoiceInput = () => {
    if (!hasRecongnitionSupport) {
      alert('Your browser has no Voice Recognition Support')
      return
    }
    if (!isListening) startListening()
  }

  const changeMinimumStyles = (value: number) => {
    setMinimumStyles(value)
    if (value) {
      const filteredFont = fontData.filter((font) => {
        return font.styles >= value;
      })
      setFonts(filteredFont);
    }

  }

  const changeEncoding = (value: string) => {
    setEncoding(value)
    if (value !== 'any') {
      const filteredFont = fontData.filter((font) => {
        return font.encoding == value;
      })
      setFonts(filteredFont);
    } else {
      setFonts(fontData);
    }
  }

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };


  if (pageLoading) return <Loading />

  // return <Loading/>

  return (
    <>
      <Navbar fontSearch={fontSearchText} fontSearchChange={filterSearchChange} />

      {/* beta release info */}
      <div className="container mt-[140px]">
        <div className="px-2 py-1 text-neutral-800 font-medium text-sm border border-neutral-200 rounded-lg w-fit">Beta Release</div>
        <h1 className="font-semibold text-[40px] leading-[48px] mt-4">Explore and Download Nepali Fonts</h1>
        <p className="mt-5 text-neutral-600 lg:w-[455px]">
          Search and download the best Nepali fonts for your next project. We’re working to bring you all the font selections for Nepali Language.
        </p>
      </div>

      <div className="container lg:mt-[66px] mt-[40px]">
        <FilterComponent
          enableVoiceInput={enableVoiceInput}
          isListening={isListening}
          previewText={previewText}
          originalText={originalText}
          previewTextChange={previewTextChange}
          fontSize={fontSize}
          setFontSize={setFontSize}
          minimumStyles={minimumStyles}
          setMinimumStyles={changeMinimumStyles}
          hasRecongnitionSupport={hasRecongnitionSupport}
          encoding={encoding}
          setEncoding={changeEncoding}
        />
        <div className="mt-6">
          {
            fonts.map((font, index) => (

              <div key={index} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}
                //@ts-ignore
                className={`border-b border-neutral-200 hover:bg-neutral-100 hover:rounded-lg ${index == hoveredIndex || index == (hoveredIndex - 1) ? 'border-transparent' : ''}`}>
                <FontList font={font} previewText={previewText} fontSize={fontSize} />
              </div>

            ))
          }
        </div>
      </div>
      <div className="container mt-20 my-10">
        {/* <div className="rounded-lg bg-neutral-50 h-[136px] flex items-center justify-center">
                    Ad Space
                </div> */}
        <div className="mt-10 rounded-lg bg-neutral-50 p-4">
          The fonts presented on this website are their authors&#39; property, and are either freeware, shareware, demo versions or public domain. Please look at the readme-files in the archives or check the indicated author&#39;s website for details, and contact him/her if in doubt. If no author/license is indicated that&#39;s because we don&#39;t have information, that doesn&#39;t mean it&#39;s free.
        </div>
      </div>
      <hr />
    </>
  );
}
