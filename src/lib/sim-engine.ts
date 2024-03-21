import {SimEngineParams} from './types';
enum status {
    playing,
    paused,
    stopped
}

export class SimEngine<T extends any> {
    endTick: number;
    frameRate: number = 60;
    initialState: T;
    lastTickTime: number | null = null;
    onTick: (previousState: T) => T;
    onUpdate: (state: T) => void;
    startTick: number;
    state: T;
    status: status = status.stopped;
    tick: number;
    constructor({
        endTick = 100,
        frameRate = 60,
        initialState, 
        onTick = state => state,
        onUpdate = state => {},
        startTick = 0,

    } : SimEngineParams<T> ) {
        this.initialState = this.state = initialState;
        this.onTick = onTick;
        this.onUpdate = onUpdate;
        this.endTick = endTick;
        this.frameRate = frameRate;
        this.startTick = this.tick = startTick;
    }

    getState() {
        return this.state;
    }

    loop(time: number) {
        if (this.status !== status.playing || this.lastTickTime === null) {return;}
        const deltaTime = time - this.lastTickTime;
        const idealTimeout = 1000 / this.frameRate;
        const timeOut = Math.max(0, idealTimeout - deltaTime);

        setTimeout(() => {
            this.lastTickTime = performance.now();
            this.state = this.onTick(this.state);
            this.onUpdate(this.state);
            this.tick++;
            if (this.tick >= this.endTick) {
                this.stop();
            }
            this.loop(performance.now());
        }, timeOut);
    }
    pause() {
        this.status = status.paused;
    }

    play() {
        this.status = status.playing;
        this.lastTickTime = performance.now();
        this.loop(this.lastTickTime);
    }

    reset() {
        this.tick = this.startTick;
        this.state = this.initialState;
        this.onUpdate(this.state);
    }

    setTick(tick: number) {
        this.tick = tick;
        this.onUpdate(this.state);
    }
    
    stop() {
        this.status = status.stopped;
    }

    destroy() {
        this.stop();
    }
}
