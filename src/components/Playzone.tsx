// @ts-ignore
import React from 'react';
// @ts-ignore
import Select from './UI/Select.tsx'
// @ts-ignore
import Stopwatch from "./UI/Stopwatch.tsx";

const Playzone = ({lang}) => {


    return (
        <div className={'flex h-playzone'}>
            <div className={'border-r-2 border-black w-1/3 flex flex-col justify-around items-center'}>
                <div className={'grid text-center w-full '}>
                    <span className={'font-bold tracking-wider text-xl'}>
                        {lang === 'eng' ? 'Theme' : 'Тема'}
                    </span>
                    <Select
                        options={[{value: 'nature', name: lang === 'eng' ? 'Nature' : 'Природа'},
                            {value: 'sport', name: lang === 'eng' ? 'Sport' : 'Спорт'},
                            {value: 'science', name: lang === 'eng' ? 'Science' : 'Наука'}]}
                    />
                </div>
                <div className={'grid text-center w-full'}>
                    <span className={'font-bold tracking-wider text-xl'}>
                        {lang === 'eng' ? 'Size' : 'Розмір'}
                    </span>
                    <Select
                        options={[{value: 'small', name: lang === 'eng' ? 'Small' : 'Малий'},
                            {value: 'medium', name: lang === 'eng' ? 'Medium' : 'Середній'},
                            {value: 'large', name: lang === 'eng' ? 'Large' : 'Великий'}]}
                    />
                </div>
                <button className={'font-bold tracking-wider text-xl border-black border-2 rounded-lg w-3/6 py-2 cursor-pointer'}>
                    {lang === 'eng' ? 'Start' : 'Старт'}
                </button>
                <div className={'text-3xl font-bold tracking-wide'}>
                    <Stopwatch/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Playzone;