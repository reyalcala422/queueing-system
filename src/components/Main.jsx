
import drmc from '../assets/pictures/image1.png'
import React, { useRef } from 'react';
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



    return (
        // <>
        //     <div>
        //         <img src={drmc} className='fixed top-0'/>
        //         <h1 className="text-4xl text-green-500 font-bold">Hello world!adsfafasf</h1>
        //     </div>
        // </>
        <div>

            <div className="bg-[url('./src/assets/pictures/image1.png')]">
            
                {/* <h1>Queue System</h1> */}
                <div className='flex flex-col items-center mt-4'>
                    <span className='text-priority-size text-text-color font-priority-font underline underline-offset-8'>{currentNumber}</span>
                    <p className='text-2xl font-semibold stroke-2 stroke-sub-text'>Current Number: </p>
                    <p className='text-2xl font-semibold stroke-2 stroke-sub-text'>Previous Number: <span className='text-[#6EACDA] text-5xl'>{previousNumber}</span></p>
                    {/* <p>Upcoming Number: {upcomingNumber || 'Calculating...'}</p> */}
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-rows-2 '>
                        <button onClick={() => addToQueue(1)} className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        focus:ring-4 ring-offset-2 ring-[#E2E2B6]
                        shadow-inner active:opacity-60
                        text-3xl fon-bold focus:bg-[#6EACDA]
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold'>Window 1</button>
                        <button onClick={() => addToQueue(2)} className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        focus:ring-4 ring-offset-2 ring-[#E2E2B6]
                        shadow-inner active:opacity-60
                        text-3xl fon-bold focus:bg-[#6EACDA] 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold'>Window 2</button>
                        <button onClick={() => addToQueue(3)} className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        focus:ring-4 ring-offset-2 ring-[#E2E2B6]
                        shadow-inner active:opacity-60
                        text-3xl fon-bold focus:bg-[#6EACDA] 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold'>Window 3</button>
                        <button onClick={() => addToQueue(4)} className='active:text-black 
                        transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-0
                        focus:ring-4 ring-offset-2 ring-[#E2E2B6]
                        shadow-inner active:opacity-60
                        text-3xl fon-bold focus:bg-[#6EACDA] 
                        bg-buttons px-2 py-3 ml-3 rounded-lg
                        hover:bg-cyan-800  text-white w-72 mt-2 font-bold'>Window 4</button>
                        {/* <button onClick={resetQueue} className='px-3 py-2 bg-[#FF722C] text-3xl font-bold
                        text-white rounded-lg mt-3 active:text-red-500 hover:bg-[#FF4F2C] hover:text-black'>Minus Queue</button> */}
                        <button onClick={resetFunc} className='px-3 py-2 bg-[#FF722C] text-3xl font-bold
                        text-white rounded-lg mt-3 active:text-red-500 hover:bg-[#FF4F2C] hover:text-black '>Reset Queue</button>
                    </div>
                </div>
                <div className='overflow-auto hover:overflow-y-auto h-36 border-solid border-2 flex flex-col justify-end mt-5 items-center'>
                    {list.map((item, index) => (
                        <div key={index}>
                            {/* <p>Priority number: {index}: {item.name} (ID: {item.id})</p> */}
                            <h2><span className=''>Priority number: </span> <span className='text-7xl font-bold text-red-500'>{index}</span>: <span className='text-3xl font-bold'>{item.name}</span> </h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Main