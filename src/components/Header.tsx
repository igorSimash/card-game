// @ts-ignore
import React from 'react';
// @ts-ignore
import Switch from "./UI/Switch.tsx";


const Header = ({lang, setLang, setSoundIsOn, setPreview}) => {

    return (
        <div
            className={'w-full flex items-center justify-around shadow-gray-300 shadow-md h-header s:text-sm tracking-wide'}>
            <div className={'flex s:flex-col font-semibold'}>
                <span className={'my-auto mb-0.5'}>
                    {lang === 'eng' ? 'Sound' : 'Звук'}
                </span>
                <Switch acting={setSoundIsOn} act={'sound'}/>
            </div>
            <div className={'flex s:flex-col  font-semibold'}>
                <span className={'my-auto mb-0.5'}>
                    {lang === 'eng' ? 'Preview' : 'Попередній перегляд'}
                </span>
                <Switch acting={setPreview} act={'preview'}/>
            </div>
            <div className={'s:flex-col flex'}>
            <span className={'my-auto font-semibold s:mx-auto mb-0.5'}>
                {lang === 'eng' ? 'Language' : 'Мова'}
            </span>
                <select
                    className={'border-2 border-black rounded-md ml-3 s:p-0 s:mx-auto py-0.5 pl-1' +
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