export const save = (storageKey, data) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}

export const retrieve = (storageKey) => {
    const messageList = localStorage.getItem(storageKey);
    return JSON.parse(messageList);
}

export const clear = (storageKey) => {
    localStorage.removeItem(storageKey);
}
