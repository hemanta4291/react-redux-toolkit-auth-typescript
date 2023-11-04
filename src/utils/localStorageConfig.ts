type valueType = string
// type dataType = string | null
type returnType = object | undefined

export const setDataLocalStorage = (key:valueType, value:valueType):void=> {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getDataFromLocalStorage = (key:valueType) => {
    const data= localStorage.getItem(key) || '{}';
    return JSON.parse(data);

}

export const removeDataFromStorage = (key:valueType) => {
    localStorage.removeItem(key);
}
