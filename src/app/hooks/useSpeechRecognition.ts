import { useEffect, useState } from "react";

let recongnition: any;
if("webkitSpeechRecognition" in window) {
    recongnition = new webkitSpeechRecognition();
    recongnition.continuous = true;
    recongnition.lang = 'ne';
}

export const useSpeechRecognition = () => {
    const [text, setText] = useState<string>('');
    const [isListening, setIsListening] = useState<boolean>(false);

    useEffect(() => {
        if(!recongnition) return

        recongnition.onresult = (event: SpeechRecognitionEvent) => {
            console.log("event : ", event);
            setText(event.results[0][0].transcript);
            recongnition.stop();
            setIsListening(false);
        }
    }, [])


    const startListening = () => {
        setText('');
        setIsListening(true);
        recongnition.start();
    }

    const stopListening = () => {
        setIsListening(false);
        recongnition.stop();
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecongnitionSupport: !!recongnition,
    }
    
}