let state = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from localStorage
};

const listeners = [];

export const subscribe = (listener) => {
    listeners.push(listener);
};

const notify = () => {
    listeners.forEach(listener => listener(state));
};

export const setUser = (user) => {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
    notify();
};

export const getUser = () => state.user;
