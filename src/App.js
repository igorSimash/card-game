import './App.css';
import Header from "./components/Header.tsx";
import Playzone from "./components/Playzone.tsx";
import {useEffect, useRef, useState} from "react";
import Sport from './music/Sport.mp3'
import Nature from './music/Nature.mp3'
import Science from './music/Science.mp3'
import {Howl, Howler} from 'howler';

function App() {
    const [language, setLanguage] = useState('eng')
    // const [soundIsOn, setSoundIsOn] = useState(true)
    // let soundsArray = [Nature, Sport, Science]
    // const sound = useRef()
    // useEffect(() => {
    //     if (soundIsOn) {
    //         sound.current = new Howl({
    //             src: Sport
    //         });
    //         sound.current.play()
    //         sound.current.stop()
    //     }
    // }, [soundIsOn])

    return (
        <div className="App h-full w-full">
            <Header lang={language} setLang={act => setLanguage(act)}/>
            <Playzone lang={language}/>
        </div>
  );
}

export default App;
