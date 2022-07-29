// @ts-ignore
import React, {useEffect, useState} from 'react';
import {IconObject} from '../../utils/IconObject.js'
// @ts-ignore
import Card from "./Card.tsx";

const Cards = ({size, theme, setDone, setIsActive, preview}) => {
    const [iconsArr, setIconsArr] = useState([])
    const [chosenFirstCard, setChosenFirstCard] = useState(-1)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        setIconsArr([])
        const iconsAfterSort = IconObject[theme].sort(() => Math.random() - 0.5).slice(0, size / 2);
        let i = -size
        iconsAfterSort.map((icon, index) => {
            setIconsArr(arr => [...arr,
                {
                    icon,
                    index,
                    isShown: false,
                    isFounded: false,
                    id: i++
                },
                {
                    icon,
                    index,
                    isShown: false,
                    isFounded: false,
                    id: i++
                }
            ]
                .sort(() => Math.random() - 0.5))
        })
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (preview === true && isLoaded === true){
            setIconsArr(curr => {
                return curr.map((obj) => {
                        return {...obj, isShown: true};
                });
        })
            setTimeout(() => setIsLoaded(false), size === 16 ? 2000 : size === 36 ? 4000 : 6000)
        }
        else {
            setIconsArr(curr => {
                return curr.map((obj) => {
                    return {...obj, isShown: false};
                });
        })
        }

    }, [isLoaded])

    const chooseCard = (idx, id, object) => {
        if (chosenFirstCard !== -1) {
            if (idx === chosenFirstCard && object.isShown === false) {
                object.isShown = true
                iconsArr.map((obj) => {
                    if (obj.index === chosenFirstCard) {
                        obj.isFounded = true
                        setChosenFirstCard(-1)
                    }
                })
            } else {
                setChosenFirstCard(-1)
                object.isShown = true
                setTimeout(() => {
                    setIconsArr(curr => {
                        return curr.map((obj) => {
                            if (!obj.isFounded) {
                                return {...obj, isShown: false};
                            }
                            return obj;
                        });
                    })
                    },1000)
            }
        } else {
            iconsArr.map((obj) => {
                if (obj.id === id) {
                    obj.isShown = true
                    setChosenFirstCard(obj.index)
                }
            })
        }
        for (let i = 0; i < iconsArr.length; i++){
            if (!iconsArr[i].isFounded){
                setIsActive(true)
                setDone(false)
                break
            }
            else {
                setDone(true)
                setIsActive(false)
            }
        }


    }

    return (
        <div className={`mx-auto h-fit grid gap-y-2 gap-x-2 w-fit 
                    ${size === 16 ? 'grid-cols-4' : size === 36 ? 'grid-cols-6' : 'grid-cols-8'}`}>
            {iconsArr.map(obj =>
                <Card chooseCard={() => chooseCard(obj.index, obj.id, obj)} size={size} icon={obj.icon}
                      isShown={obj.isShown} isFounded={obj.isFounded} key={Math.random()}/>)}
        </div>
    );
};

export default Cards;