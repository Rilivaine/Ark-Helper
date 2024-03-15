import { buildPage } from "./page/pageBuilder.js";
import { loadDataToInputs } from "./data/rampData.js";
import { loadDataFromLocalStorage } from "./data/dataOperations.js";

document.addEventListener('load', (() => {
  const data = loadDataFromLocalStorage('rampsData');

  buildPage();
  loadDataToInputs(data);
})());
