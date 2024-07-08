'use client';
import { FontList } from "../components/FontList";
import { useEffect, useState } from "react";
import { fontData } from "./data";
import { IFont } from "@/types/main";
import { Loading } from "@/components/Loading";
import FilterComponentv2 from "@/components/FilterComponent";
import Head from "next/head";

export default function Home() {
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [previewText, setPreviewText] = useState<string>("");
  const [fontSearchText, setFontSearchText] = useState<string>("");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [fonts, setFonts] = useState<IFont[]>(fontData);

  // filter font data
  const [fontSize, setFontSize] = useState<number>(40)
  

  useEffect(() => {
    window.innerWidth >= 1280 ? setFontSize(40) : (window.innerWidth >= 1024 ? setFontSize(36) : setFontSize(22))
    setPageLoading(false)
  }, [])

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };


  if (pageLoading) return <Loading />

  return (
    <>
      <Head>
        <link rel="canonical" href="https://anepali.com" />
      </Head>
      <div className="container mt-[140px]">
        <div className="px-2 py-1 text-foreground font-medium text-sm border border-input rounded-lg w-fit">Beta Release</div>
        <h1 className="font-semibold text-[40px] leading-[48px] mt-4">Explore and Download Nepali Fonts</h1>
        <p className="mt-5 text-foreground lg:w-[455px]">
          Search and download the best Nepali fonts for your next project. We’re working to bring you all the font selections for Nepali Language.
        </p>
      </div>

      <FilterComponentv2 setFonts={setFonts} previewText={previewText} setPreviewText={setPreviewText} fontSize={fontSize} setFontSize={setFontSize} />

      <div className="mt-6 container">
        {
          fonts.map((font, index) => (

            <div key={index} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}
              //@ts-ignore
              className={`border-b border-input hover:bg-accent hover:rounded-lg ${index == hoveredIndex || index == (hoveredIndex - 1) ? 'border-transparent' : ''}`}>
              <FontList font={font} previewText={previewText} fontSize={fontSize} />
            </div>

          ))
        }
      </div>
      <div className="container mt-20 my-10">
        {/* <div className="rounded-lg bg-slate-50 h-[136px] flex items-center justify-center">
                    Ad Space
                </div> */}
        <div className="mt-10 rounded-lg bg-slate-50 p-4">
          The fonts presented on this website are their authors&#39; property, and are either freeware, shareware, demo versions or public domain. Please look at the readme-files in the archives or check the indicated author&#39;s website for details, and contact him/her if in doubt. If no author/license is indicated that&#39;s because we don&#39;t have information, that doesn&#39;t mean it&#39;s free.
        </div>
      </div>
      <hr />
    </>
  );
}