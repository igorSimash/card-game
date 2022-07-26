// @ts-ignore
import React, {useState} from 'react';
// @ts-ignore
import Select from './UI/Select.tsx'
// @ts-ignore
import Stopwatch from "./UI/Stopwatch.tsx";
// @ts-ignore
import Cards from "./UI/Cards.tsx";
// @ts-ignore
import Timer from "./UI/Timer.tsx";

const Playzone = ({lang, setThemeMusic, preview}) => {
    const [theme, setTheme] = useState('nature')
    const [size, setSize] = useState('small')
    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false)
    const [done, setDone] = useState(false)
    const [timer, setTimer] = useState(0)
    const cardCount = size === 'small' ? 16 : size === 'medium' ? 36 : 64


    return (
        <div className={`flex h-playzone bg-gradient-to-b s:flex-col-reverse
            ${theme === 'nature' ? ' from-green-200 to-green-300' : theme === 'sport'
            ? 'from-red-300 to-violet-400' : 'from-amber-200 to-lime-300'}`}>
            <div className={'border-r-2 s:px-2 s:border-r-0 s:border-t-2 s:mb-7 s:pt-7 border-black w-1/3 s:w-full flex flex-col s:flex-row justify-around items-center'}>
                <div className={'grid text-center w-full '}>
                    <span className={'font-bold tracking-wider text-xl s:text-lg'}>
                        {lang === 'eng' ? 'Theme' : 'Тема'}
                    </span>
                    <Select
                        options={[{value: 'nature', name: lang === 'eng' ? 'Nature' : 'Природа'},
                            {value: 'sport', name: lang === 'eng' ? 'Sport' : 'Спорт'},
                            {value: 'science', name: lang === 'eng' ? 'Science' : 'Наука'}]}
                        onChange={(e) => {
                            setTheme(e.target.value)
                            setThemeMusic(e)
                        }}
                        disabled={isStarted}
                    />
                </div>
                <div className={'grid text-center w-full'}>
                    <span className={'font-bold tracking-wider text-xl s:text-lg'}>
                        {lang === 'eng' ? 'Size' : 'Розмір'}
                    </span>
                    <Select
                        options={[{value: 'small', name: lang === 'eng' ? 'Small' : 'Малий'},
                            {value: 'medium', name: lang === 'eng' ? 'Medium' : 'Середній'},
                            {value: 'large', name: lang === 'eng' ? 'Large' : 'Великий'}]}
                        onChange={(e) => {
                            setSize(e.target.value)
                        }}
                        disabled={isStarted}
                    />
                </div>
                    {isStarted
                    ?
                            <button className={'w-1/4 py-2 border-black border-2 rounded-lg text-red-700 mr-2 s:w-3/5 font-bold text-xl'}
                                    onClick={() => {
                                        setIsStarted(false)
                                        setIsActive(false)
                                        setTimer(0)

                                    }
                            }
                            >
                                X
                            </button>
                    :
                        <button
                            className={'font-bold s:w-3/5 s:text-md tracking-wider text-xl border-black border-2 w-1/2 mr-2 md:w-4/6 sm:w-4/5 rounded-lg py-2 cursor-pointer'}
                            onClick={() => {
                                setIsStarted(true)
                                setIsActive(true)
                            }}
                        >
                            {lang === 'eng' ? 'Start' : 'Старт'}
                        </button>
                    }
                {isStarted
                ?
                    <div className={'text-3xl font-bold tracking-wide s:text-xl underline'}>
                        <Stopwatch startTime={0} setTimer={time => setTimer(time)} isActive={isActive}/>
                    </div>
                    :
                    <span className={'text-3xl font-bold tracking-wide s:text-xl underline'}>00:00:00</span>
                }

            </div>
            <div className={'w-full h-full'}>
                {isStarted && !done &&
                    <div className={'h-full flex items-center'}>
                        <Cards preview={preview} setIsActive={(isActive) => setIsActive(isActive)}
                               setDone={isDone => setDone(isDone)} size={cardCount} theme={theme}/>
                    </div>
                }
                {isStarted && done &&
                    <div className={'h-full text-5xl w-full flex flex-col justify-center items-center'}>
                        <span className={'mb-3'}>You win!</span>
                        <Timer time={timer} />
                    </div>
                }
            </div>


        </div>
    );
};

export default Playzone;