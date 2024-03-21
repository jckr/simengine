import {useCallback, useEffect, useRef} from 'react';
import { SimEngineParams } from '../lib/types';
import { SimEngine } from '..';

export function useSimEngine<T extends any>(simEngineParams: SimEngineParams<T>) {
    const simEngineRef = useRef<SimEngine<T> | null>(null);

    useEffect(() => {
        if (simEngineRef.current === null) {
            simEngineRef.current = new SimEngine(simEngineParams);
        }

        return () => {
            simEngineRef.current?.destroy();
        };
    }, []);
    
    const play = useCallback(() => {
        console.log(simEngineRef.current);
        simEngineRef.current?.play();
    }, []);
    const pause = useCallback(() => {
        simEngineRef.current?.pause();
    }, []);
    const stop = useCallback(() => {
        simEngineRef.current?.stop();
    }, []);
    const reset = useCallback(() => {
        simEngineRef.current?.reset();
    }, []);
    const setTick = useCallback((tick: number) => {
        simEngineRef.current?.setTick(tick);
    }, []);
    const getState = useCallback(() => {
        simEngineRef.current?.getState();
    }, []);

    return {
        getState, 
        pause,
        play,
        reset,
        setTick,
        stop,
    };
}
