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

            <div>
                <h1>Queue System</h1>
                <p>Current Number: {currentNumber}</p>
                <p>Previous Number: {previousNumber}</p>
                {/* <p>Upcoming Number: {upcomingNumber || 'Calculating...'}</p> */}

                <button onClick={() => addToQueue(1)} className='text-3xl fon-bold bg-cyan-500 px-3 py-4 ml-3 rounded-lg'>Window 1</button>
                <button onClick={() => addToQueue(2)} className='text-3xl fon-bold bg-cyan-500 px-3 py-4 ml-3 rounded-lg'>Window 2</button>
                <button onClick={() => addToQueue(3)} className='text-3xl fon-bold bg-cyan-500 px-3 py-4 ml-3 rounded-lg'>Window 3</button>
                <button onClick={() => addToQueue(4)} className='text-3xl fon-bold bg-cyan-500 px-3 py-4 ml-3 rounded-lg'>Window 4</button>
                <div className='overflow-auto hover:overflow-y-auto h-40 border-solid border-2'>
                    {list.map((item, index) => (
                        <div key={index}>
                            {/* <p>Priority number: {index}: {item.name} (ID: {item.id})</p> */}
                            <h2>Priority number: {index}: {item.name} </h2>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Main