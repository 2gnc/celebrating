export const host = process.env.NODE_ENV === 'development' ? 'ws://localhost:5555' : window.location.origin.replace(/^http/, 'ws');
