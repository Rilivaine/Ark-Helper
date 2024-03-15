import { loadDataFromLocalStorage, saveDataToLocalStorage } from "../data/dataOperations.js";

export function parseRawRampRange(rawRampRange) {
  /** @type {string[]} */
  const rampsRanges = rawRampRange.split(' ');
  console.log(rampsRanges);
  return rampsRanges;
}

export function loadRampRange() {
  const rampRange = loadDataFromLocalStorage('rampsRanges');

  return rampRange;
}

export function saveRampRange() {
  const rampRangeInput = document.getElementById('ramp-range-input');
  const rampRange = rampRangeInput.value;
  saveDataToLocalStorage('rampsRanges', rampRange);
}

export function callbackForRampRanges(rampsRanges, callback) {
  for (let k = 0; k < rampsRanges.length; k++) {
    const rampRange = rampsRanges[k].split('-');
    for (let i = rampRange[0]; i <= (rampRange[1] ?? rampRange[0]); i++) {
      callback(i);
    }
  }
}
