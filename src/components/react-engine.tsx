
import React, { useState } from 'react';
import { Engine } from '..';
export function ReactEngine() {
    const engineRef = React.useRef<Engine<number> | null>(null);
    const [counter, setCounter] = useState<number>(0);
    React.useEffect(() => {
        if (engineRef.current === null) {
            engineRef.current = new Engine<number>({initialState: 0, onTick: counter => counter + 1, onUpdate: setCounter});
            engineRef.current.play();
        }
    }, []);

    return <div className="react-engine">{counter}</div>
} 