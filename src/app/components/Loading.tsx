import { useEffect, useState } from "react";

export const Loading = () => {
    
    const [progress, setProgress] = useState<number>(10);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = prevProgress + 5;
            if (newProgress >= 100) {
              clearInterval(interval);
              return 100;
            }
            return newProgress;
          });
        }, 100);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="h-screen w-screen flex items-center justify-center relative">
            <div className="absolute top-0 right-0 left-0 h-1 bg-red-600 transition-all duration-200 ease-in-out" style={{width: `${progress}%`}}></div>
            <img src="./logo.svg" alt="aNepali" className="h-20"/>
        </div>
    )
}