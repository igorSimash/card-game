// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import Timer from './Timer.tsx'

const Stopwatch = ({isActive, setTimer, startTime}) => {

    const [time, setTime] = useState(startTime);
    if(isActive === false) {
        setTimer(time)
    }
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