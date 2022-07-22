// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import Timer from './Timer.tsx'

const Stopwatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive])
    return (
        <div>
            <Timer time={time} />
        </div>
    );
};

export default Stopwatch;