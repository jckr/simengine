export interface EngineParams<T> {
    endTick?: number;
    frameRate?: number;
    initialState: T;
    onTick?: (previousState: T) => T;
    onUpdate?: (state: T) => void;
    startTick?: number;
}
