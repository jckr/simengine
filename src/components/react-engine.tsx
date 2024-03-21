
import React, { useState } from 'react';
import { Engine } from '..';
import { useSimEngine } from './use-sim-engine';
export function ReactEngine() {

    const [counter, setCounter] = useState<number>(0);
    const {play, stop, reset} = useSimEngine<number>({
        initialState: 0,
        onTick: (state: number) => {return state + 1;},
        onUpdate: (state:number) => {setCounter(state);},
    })

    return (<><div className="react-engine">{counter}</div>
    <button onClick={() => play()}>Play</button>
    <button onClick={() => stop()}>Stop</button>
    <button onClick={() => reset()}>Reset</button>
    
    </>)
} 