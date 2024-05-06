import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Input } from "./components/Input";
import { FontList } from "./components/FontList";

export default function Home() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="w-full bg-neutral-100 px-4 py-5 rounded-xl mt-4">
          <Input placeholder="Preview text here" type="text" />
        </div>

        <div>
          {
            loop.map((item) => (
              <FontList key={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}
