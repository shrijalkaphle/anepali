'use client';
import { Navbar } from "./components/Navbar";
import { FontList } from "./components/FontList";
import { useState } from "react";

export default function Home() {
  const [previewText, setPreviewText] = useState<string>("");
  const loop = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="w-full bg-neutral-100 px-4 py-5 rounded-xl mt-4">
          <input type="text" placeholder="Preview text here" className={`bg-transparent outline-none placeholder:text-neutral-600 w-full`} value={previewText} onChange={(e) => setPreviewText(e.currentTarget.value)}/>
        </div>
        <div>
          {
            loop.map((item) => (
              <FontList key={item} previewText={previewText}/>
            ))
          }
        </div>
      </div>
    </>
  );
}
