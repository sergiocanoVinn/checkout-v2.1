
export const setLocalStorage = ({key, value}) => {

    typeof value === 'object'
        ? localStorage.setItem(key, JSON.stringify(value))
        : localStorage.setItem(key, value)

}

export const getLocalStorage = ({key}) => {

    try {
        return JSON.parse(localStorage.getItem(key))
    } catch {
        return localStorage.getItem(key)
    }

}

export const deleteLocalStorage = ({key}) => localStorage.removeItem(key);