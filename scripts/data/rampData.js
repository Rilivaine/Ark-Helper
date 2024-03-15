export function clearDataFromInputs() {
  const containerNumbers = document.querySelectorAll('.container-number');
  const truckNumbers = document.querySelectorAll('.truck-number');

  if (containerNumbers) {
    containerNumbers.forEach(
      (/** @type {HTMLInputElement} */ i) => {
        if (i) {
          i.value = "";
        }
      });
  }

  if (truckNumbers) {
    truckNumbers.forEach((/** @type {HTMLInputElement} */ i) => {
      if (i) {
        i.value = "";
      }
    });
  }
}

export function loadDataToInputs(data) {
  const containerNumbers = document.querySelectorAll('.container-number');
  const truckNumbers = document.querySelectorAll('.truck-number');

  if (containerNumbers && data) {
    containerNumbers.forEach(
      (/** @type {HTMLInputElement} */ i) => {
        if (i && i.getAttribute('data-ramp') && data[i.getAttribute('data-ramp')]) {
          i.value = data[i.getAttribute('data-ramp')]['containerNumber']?.trim() ?? "";
        }
      });
  }

  if (truckNumbers && data) {
    truckNumbers.forEach((/** @type {HTMLInputElement} */ i) => {
      if (i && i.getAttribute('data-ramp') && data[i.getAttribute('data-ramp')]) {
        i.value = data[i.getAttribute('data-ramp')]['truckNumber']?.trim() ?? "";
      }
    });
  }
}

export function getDataFromInputs() {
  let data = new Object({});
  const containerNumbers = document.querySelectorAll('.container-number');
  const truckNumbers = document.querySelectorAll('.truck-number');

  if (containerNumbers) {
    containerNumbers.forEach(
      (/** @type {HTMLInputElement} */ i) => {
        if (i && i.getAttribute('data-ramp')) {
          const ramp = i.getAttribute('data-ramp');
          if (!data[ramp]) {
            data[ramp] = {};
          }

          if (i.value) {
            data[ramp]['containerNumber'] = i.value;
          }
        }
      });
  }

  if (truckNumbers) {
    truckNumbers.forEach((/** @type {HTMLInputElement} */ i) => {
      if (i && i.getAttribute('data-ramp')) {
        const ramp = i.getAttribute('data-ramp');
        if (!data[ramp]) {
          data[ramp] = {};
        }

        if (i.value) {
          data[ramp]['truckNumber'] = i.value.toUpperCase();
        }
      }
    });
  }

  return data;
}
