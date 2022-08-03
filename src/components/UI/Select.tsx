// @ts-ignore
import React from 'react';

const Select = ({options, onChange, disabled}) => {
    return (
        <div className={'w-full'}>
            <select
                className={'border-black border-2 rounded-md w-3/6 text-lg s:text-md bg-none outline-0 font-semibold md:w-4/6 sm:w-4/5 s:w-11/12 s:mx- py-1 s:py-0.5'}
                onChange={onChange}
                disabled={disabled}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default Select;