import {useCallback, useEffect, useRef} from 'react';
import { EngineParams } from '../lib/types';
import { Engine } from '..';

export function useSimEngine<T extends any>(simEngineParams: EngineParams<T>) {
    const simEngineRef = useRef<Engine<T> | null>(null);

    useEffect(() => {
        if (simEngineRef.current === null) {
            simEngineRef.current = new Engine(simEngineParams);
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
