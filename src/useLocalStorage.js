import { useState, useEffect } from 'react';

function useLocalstorage(key, intialValue) {
    const [value, setValue] = useState(() => {
        try {
            const savedValue = localStorage.getItem(key);
            return savedValue ? JSON.parse(savedValue) : intialValue;
        }
        catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return intialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error writing localStorage key "${key}":`, error);
        }
    }
    , [key, value]);

    return [value, setValue];
}

export default useLocalstorage;