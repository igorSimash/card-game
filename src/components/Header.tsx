// @ts-ignore
import React from 'react';
// @ts-ignore
import Switch from "./UI/Switch.tsx";


const Header = ({lang, setLang, setSoundIsOn, setPreview}) => {

    return (
        <div className={'w-full flex items-center justify-around shadow-gray-300 shadow-md h-header tracking-wide'}>
            <div className={'flex font-semibold'}>
                <span className={'my-auto'}>
                    {lang === 'eng' ? 'Sound' : 'Звук'}
                </span>
                <Switch acting={setSoundIsOn} act={'sound'}/>
            </div>
            <div className={'flex font-semibold'}>
                <span className={'my-auto'}>
                    {lang === 'eng' ? 'Preview' : 'Попередній перегляд'}
                </span>
                <Switch acting={setPreview} act={'preview'}/>
            </div>
            <div>
            <span className={'my-auto font-semibold'}>
                {lang === 'eng' ? 'Language' : 'Мова'}
            </span>
                <select
                    className={'border-2 border-black rounded-md ml-3 py-0.5 pl-1' +
                        ''}
                    onChange={(e) => setLang(e.target.value)}
                    value={lang}
                >
                    <option value="eng">
                        English
                    </option>
                    <option value="ua">
                        Українська
                    </option>
                </select>
            </div>
        </div>
    );
};

export default Header;