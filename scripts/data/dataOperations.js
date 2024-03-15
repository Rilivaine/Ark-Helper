export function saveDataToLocalStorage(key, data) {
  const saveData = JSON.stringify(data);

  if (key && saveData) {
    localStorage.setItem(key, saveData);
  }
}

export function loadDataFromLocalStorage(key) {
  const saveData = localStorage.getItem(key);

  if (saveData) {
    return JSON.parse(saveData);
  }
}
