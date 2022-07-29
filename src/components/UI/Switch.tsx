// @ts-ignore
import React, {useState} from 'react';

const Switch = ({acting, act}) => {
    const [toggle, setToggle] = useState(
        act === 'sound'
        ?
            localStorage.getItem('sound') ? !(localStorage.getItem('sound') === 'true') : true
        :
            localStorage.getItem('preview') ? !(localStorage.getItem('preview') === 'true') : true
        )

    const toggleClass = " transform translate-x-5";
    return (
        <div className="flex">
            <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ml-3"
                onClick={() => {
                    setToggle(!toggle);
                    acting()
                }}
            >
                <div
                    className={
                        "bg-gray-600 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                        (toggle ? null : toggleClass)
                    }
                ></div>
            </div>
        </div>
    );
};

export default Switch;