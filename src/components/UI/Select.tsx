// @ts-ignore
import React from 'react';

const Select = ({options, onChange}) => {
    return (
        <div>
            <select
                className={'border-black border-2 rounded-md w-3/6 text-lg bg-none outline-0 font-semibold py-1'}
                onChange={onChange}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default Select;