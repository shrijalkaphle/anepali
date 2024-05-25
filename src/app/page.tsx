'use client';
import { Navbar } from "./components/Navbar";
import { FontList } from "./components/FontList";
import { FilterComponent } from "./components/Filter";
import { useEffect, useState } from "react";
import translate from "./utils/devnagari";
import { fontData } from "./data";
import { IFont } from "./types/main";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

export default function Home() {

  // hhook
  const { text, isListening, startListening, hasRecongnitionSupport } = useSpeechRecognition();

  const [pageLoading, setPageLoading] = useState<boolean>(true)

  const [originalText, setOriginalText] = useState<string>("");
  const [previewText, setPreviewText] = useState<string>("");
  const [fontSearchText, setFontSearchText] = useState<string>("");

  const [fonts, setFonts] = useState<IFont[]>(fontData);

  // filter font data
  const [fontSize, setFontSize] = useState<number>(40)
  const [minimumStyles, setMinimumStyles] = useState<number>(0)

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
    setTimeout(() => {
      setPageLoading(false)
    }, 2000)
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

  if (pageLoading) return <Loading />

  // return <Loading/>

  return (
    <>
      <Navbar fontSearch={fontSearchText} fontSearchChange={filterSearchChange} />

      <div className="container lg:mt-[116px] mt-[140px]">
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
        />
        <div className="mt-6">
          {
            fonts.map((font, index) => (
              <FontList key={index} font={font} previewText={previewText} fontSize={fontSize} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
