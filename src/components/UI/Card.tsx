// @ts-ignore
import React from 'react';

const Card = ({size, icon, chooseCard, isShown}) => {
    return (
        <div className={`border-black card border-2 rounded-lg cursor-pointer p-1
            ${size === 16 ? 'h-24 w-24 s:h-20 s:w-20' : 
            size === 36 ? 's:w-14 s:h-14 sm:w-16 sm:h-16 w-20 h-20' : 
                's: sm:w-12 sm:h-12 s:w-10 s:h-10 md:w-14 md:h-14 w-16 h-16'}
                ${!isShown && 'bg-card card'}`}
            onClick={chooseCard}>
            {isShown && icon}
        </div>
    );
};

export default Card;