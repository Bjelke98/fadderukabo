// useEnglish hook is based on the work of this github repo by fireship.io:
// https://github.com/fireship-io/tailwind-dashboard/blob/main/src/hooks/useDarkMode.jsx

import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useEnglish = () => {
  const [english, setEnglish] = useLocalStorage('en');
  const isEnglish = typeof enabledState === 'undefined' && english;

  useEffect(() => {
    isEnglish ? console.log("EN enable") : console.log("EN disable");
  }, [english, isEnglish]);

  return [english, setEnglish];
};

export default useEnglish;