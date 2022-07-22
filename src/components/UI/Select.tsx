// @ts-ignore
import React from 'react';

const Select = ({options, value}) => {
    return (
        <div>
            <select
                className={'border-black border-2 rounded-md w-3/6 text-lg font-semibold py-1'}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default Select;