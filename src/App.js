import './App.css';
import Header from "./components/Header.tsx";
import Playzone from "./components/Playzone.tsx";
import {useState} from "react";
import Sport from './music/Sport.mp3'
import Nature from './music/Nature.mp3'
import Science from './music/Science.mp3'
import ReactHowler from 'react-howler'


function App() {
    const [language, setLanguage] = useState(localStorage.getItem('language'))
    const [soundIsOn, setSoundIsOn] = useState(localStorage.getItem('sound') ? localStorage.getItem('sound') === 'true' : false)
    const [theme, setTheme] = useState('nature')
    const [preview, setPreview] = useState(localStorage.getItem('preview') ? localStorage.getItem('preview') === 'true' : false)

    localStorage.setItem('language', language)
    localStorage.setItem('sound', '' + soundIsOn)
    localStorage.setItem('preview', '' + preview)


    return (
        <div className="App h-full w-full">
            {soundIsOn &&
                <ReactHowler volume={0.1} loop={true} src={theme === 'nature' ? Nature : theme === 'sport' ? Sport : Science}
                             playing={soundIsOn} /> }
            <Header setPreview={() => setPreview(!preview)} lang={language} setLang={act => setLanguage(act)} setSoundIsOn={() => setSoundIsOn(!soundIsOn)}/>
            <Playzone preview={preview} setThemeMusic={e => setTheme(e.target.value)} lang={language}/>
        </div>
  );
}

export default App;
