// @ts-ignore
import React, {useState} from 'react';

const Card = ({size, icon, chooseCard, isShown}) => {
    return (
        <div className={`border-black card border-2 rounded-lg cursor-pointer p-1
            ${size === 16 ? 'h-24 w-24' : size === 36 ? 'w-20 h-20' : 'w-16 h-16'}
                ${!isShown && 'bg-card card'}`}
            onClick={chooseCard}>
            {isShown && icon}
        </div>
    );
};

export default Card;