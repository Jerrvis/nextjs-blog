export const getLocalStorage = (str: string) => {
  return window.localStorage.getItem(str)
}

export const setLocalStorage = (str: string, value: string) => {
  return window.localStorage.setItem(str, value)
}
