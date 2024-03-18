
import React from 'react';
import { Engine } from '..';
export function ReactEngine() {
    const engineRef = React.useRef<Engine | null>(null);

    React.useEffect(() => {
        if (engineRef.current === null) {
            engineRef.current = new Engine();
        }
    }, []);

    return <div className="react-engine"></div>
} 