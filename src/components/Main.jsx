
import drmc from '../assets/pictures/image1.png'
import React, { useEffect, useRef, useState } from 'react';
import sound from '../assets/sound/sound1.mp3';
import { useQueueState } from 'rooks';
export function Main() {
    const userButtonsRef = useRef([
        { name: "Window 1", id: 1 },
        { name: "Window 2", id: 2 },
        { name: "Window 3", id: 3 },
        { name: "Window 4", id: 4 }
    ]);
    const [list, { enqueue, dequeue, peek, length }] = useQueueState([1]);
    const [currentNumber, setCurrentNumber] = React.useState(0);
    const [previousNumber, setPreviousNumber] = React.useState(null);
    const [upcomingNumber, setUpcomingNumber] = React.useState(null);
    //
    const [activeButton, setActiveButton] = useState(null);
    const resetQueue = () => {
        dequeue();
        setCurrentNumber(0);
        setPreviousNumber(null);
        setUpcomingNumber(null);
        // setSelectedUser(null);
    };
    const resetFunc = () => {
        // window.location.reload();
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
        // console.log('page to reload')
    }


    function addToQueue(userId) {
        const user = userButtonsRef.current.find(user => user.id === userId);
        if (user) {
            enqueue({ name: user.name, id: user.id });

            // Update numbers
            setPreviousNumber(currentNumber);
            setCurrentNumber(prev => prev + 1);
            setUpcomingNumber(length > 0 ? list[0]?.id : null);

        } else {
            console.error(`User with ID ${userId} not found`);
        }
    }

    React.useEffect(() => {
        if (length > 0) {
            setUpcomingNumber(list[0]?.id);

        }
    }, [length, list]);
    // key released
    const handleKeyPress = (event) => {
        switch (event.key) {
            case '1':
                addToQueue(1);
                play();
                break;
            case '2':
                addToQueue(2);
                play();
                break;
            case '3':
                addToQueue(3);
                play();
                break;
            case '4':
                addToQueue(4);
                play();
                break;
            case '0':
                resetFunc(0);

                break;
            default:
                return;
        }
    };
    //
    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key >= '1' && event.key <= '4') {
                handleButtonClick(parseInt(event.key));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function play() {
        new Audio(sound).play();
    }

    return (
        <div>
            {/* <div className="bg-[url('./src/assets/pictures/image1.png')]"> */}
            <div onKeyDown={handleKeyPress} className="bg-[url('./src/assets/pictures/image1.png')] h-screen">

                {/* <h1>Queue System</h1> */}
                <div className='flex flex-col items-center mt-4'>
                    <span className='text-priority-size text-text-color font-priority-font
                    underline underline-offset-8 xl:text-priority-size-xl xl:-mt-48'>{currentNumber}</span>
                    <p className='text-2xl font-semibold stroke-2
                    stroke-sub-text xl:-mt-20 xl:text-4xl'>Current Number: </p>
                    <p className='text-2xl font-semibold stroke-2
                    stroke-sub-text xl:text-4xl'>Previous Number:
                        <span className='text-[#6EACDA] text-5xl xl:text-6xl'>{previousNumber}</span></p>
                    {/* <p>Upcoming Number: {upcomingNumber || 'Calculating...'}</p> */}
                </div>
                <div className='flex justify-center mt-6'>
                    <div className='grid grid-rows-2 xl:grid-cols-4'>
                        {/* <button onClick={() => addToQueue(1)}
                            className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        shadow-inner active:opacity-60
                        text-3xl fon-bold
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold
                        hover:text-sub-text' autoFocus="true">Window 1</button> */}

                        <button onClick={() => { addToQueue(1); handleButtonClick(1); play() }}
                            className={`font-semibold text-white transition ease-in-out
                            delay-150 hover:-translate-y-1
                            hover:scale-110 duration-0 text-3xl 
                            bg-buttons px-3 py-4 w-72 ml-5
                            fon-bold hover:text-sub-text rounded-lg
                            ${activeButton === 1 ? 'bg-cyan-800 mt-2 underline underline-offset-8 hover:-translate-y-1 hover:scale-110 animate-bounce ring-offset-2 ring-8'
                                    : 'bg-blue-500'}`} autoFocus="true">Window 1</button>

                        <button onClick={() => { addToQueue(2); handleButtonClick(2); play() }}
                            className={`font-semibold text-white transition ease-in-out
                            delay-150 hover:-translate-y-1
                            hover:scale-110 duration-0 text-3xl 
                            bg-buttons px-3 py-4 w-72 ml-5
                            fon-bold hover:text-sub-text rounded-lg
                            ${activeButton === 2 ? 'bg-cyan-800 mt-2 underline underline-offset-8 hover:-translate-y-1 hover:scale-110 animate-bounce ring-offset-2 ring-8 '
                                    : 'bg-blue-500'}`} autoFocus="true">Window 2</button>

                        <button onClick={() => { addToQueue(3); handleButtonClick(3); play() }}
                            className={`font-semibold text-white transition ease-in-out
                            delay-150 hover:-translate-y-1
                            hover:scale-110 duration-0 text-3xl 
                            bg-buttons px-3 py-4 w-72 ml-5
                            fon-bold hover:text-sub-text rounded-lg
                            ${activeButton === 3 ? 'bg-cyan-800 mt-2 underline underline-offset-8 hover:-translate-y-1 hover:scale-110 animate-bounce ring-offset-2 ring-8 '
                                    : 'bg-blue-500'}`} autoFocus="true">Window 3</button>

                        <button onClick={() => { addToQueue(4); handleButtonClick(4); play() }}
                            className={`font-semibold text-white transition ease-in-out
                            delay-150 hover:-translate-y-1
                            hover:scale-110 duration-0 text-3xl 
                            bg-buttons px-3 py-4 w-72 ml-5
                            fon-bold hover:text-sub-text rounded-lg
                            ${activeButton === 4 ? 'bg-cyan-800 mt-2 underline underline-offset-8 hover:-translate-y-1 hover:scale-110 animate-bounce ring-offset-2 ring-8 '
                                    : 'bg-blue-500'}`} autoFocus="true">Window 4</button>


                        {/* <button onClick={() => { addToQueue(2); handleButtonClick(2) }}
                            className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        shadow-inner active:opacity-60
                        text-3xl fon-bold 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold
                        hover:text-sub-text'>Window 2</button> */}

                        {/* <button onClick={() => addToQueue(3)}
                            className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        shadow-inner active:opacity-60
                        text-3xl fon-bold 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold
                        hover:text-sub-text'>Window 3</button>

                        <button onClick={() => addToQueue(4)}
                            className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        shadow-inner active:opacity-60
                        text-3xl fon-bold 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold
                        hover:text-sub-text'>Window 4</button> */}

                        {/* <button onClick={resetQueue} className='px-3 py-2 bg-[#FF722C] text-3xl font-bold
                        text-white rounded-lg mt-3 active:text-red-500 hover:bg-[#FF4F2C] hover:text-black'>Minus Queue</button> */}

                        {/* <button onClick={resetFunc} className='px-3 py-2 bg-[#FF722C] text-3xl font-bold
                        text-white rounded-lg mt-3 active:text-red-500 hover:bg-[#FF4F2C] hover:text-black '>Reset Queue</button> */}
                        <button className='px-3 py-2 bg-[#FF722C] text-3xl font-bold
                        text-white rounded-lg mt-3 active:text-red-500 hover:bg-[#FF4F2C] hover:text-black lg:hidden ' onClick={() => resetFunc(0)}>Reset!</button>
                    </div>
                </div>
                <div className='overflow-auto hover:overflow-y-auto h-36 lg:h-60 flex flex-col justify-end -mt-1 items-center'>
                    {list.map((item, index) => (
                        <div key={index}>
                            {/* <p>Priority number: {index}: {item.name} (ID: {item.id})</p> */}
                            <h2><span className='text-4xl'>Priority number: </span> <span className='text-7xl font-bold text-red-500 xl:text-9xl'>{index}</span>: <span className='text-6xl font-bold'>{item.name}</span> </h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Main