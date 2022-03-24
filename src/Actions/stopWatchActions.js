export const start = () => {
    return {
        type: "START",
    };
};

export const setMilliseconds = () => {
    return {
        type: "SET_MILLISECONDS",
    };
};

export const setSeconds = () => {
    return {
        type: "SET_SECONDS",
    };
};

export const setMinutes = () => {
    return {
        type: "SET_MINUTES",
    };
};

export const setMillisecondsToZero = () => {
    return {
        type: "SET_MILLISECONDS_TO_ZERO",
    };
};

export const setSecondsToZero = () => {
    return {
        type: "SET_SECONDS_TO_ZERO",
    };
};

export const setMinutesToZero = () => {
    return {
        type: "SET_MINUTES_TO_ZERO",
    };
};

export const pause = () => {
    return {
        type: "PAUSE",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const lap = (payload) => {
    return {
        type: "LAP",
        data: payload
    };
};

export const resetLaps = () => {
    return {
        type: "RESET_LAPS",
    };
};