const getLocalStorage = (key, initial) => {
  try {
    const token = window.localStorage.getItem(key);
    return JSON.parse(token);
  } catch (error) {
    return initial;
  }
};

export default getLocalStorage;
