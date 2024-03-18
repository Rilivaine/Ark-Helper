import { loadDataFromLocalStorage, saveDataToLocalStorage } from "../data/dataOperations.js";
import { getDataFromInputs } from "../data/rampData.js";
import { showTempPopup } from "../utils/popup.js";
import { copyToClipboard } from '../utils/copy.js';
import { composeMessage } from '../utils/message.js';
import { parseRawRampRange, callbackForRampRanges } from '../data/rampRange.js';

export function buildRampsContainer() {
  const rampsRanges = parseRawRampRange(loadDataFromLocalStorage('rampsRanges'));

  const mainContainer = document.createElement('div');
  mainContainer.id = 'container-ramps';

  callbackForRampRanges(rampsRanges, (i) => {
    const rampWrapper = document.createElement('div');
    rampWrapper.classList.add('ramp-entry');
    rampWrapper.id = i?.toString();

    const rampNumber = document.createElement('span');
    rampNumber.textContent = `Ramp ${i}`;
    rampWrapper.append(rampNumber);

    rampWrapper.append(createInput('container-number', i?.toString(), false));
    rampWrapper.append(createInput('truck-number', i?.toString(), true));

    mainContainer.append(rampWrapper);
  });

  document.body.append(mainContainer);
  mainContainer.append(createDataButton());
}

function createInput(className, id, /* value, */ text = true) {
  const input = document.createElement('input');
  input.classList.add(className);
  //input.value = value ?? '';
  input.setAttribute('type', text ? 'text' : 'number');
  input.setAttribute('data-ramp', id?.toString());

  return input;
}

function createDataButton() {
  const dataButton = document.createElement('div');
  dataButton.id = 'data-button';
  dataButton.classList.add('square-button', 'fa-regular', 'fa-clipboard');
  dataButton.addEventListener('click', () => {
    const data = getDataFromInputs();
    saveDataToLocalStorage('rampsData', data);
    copyToClipboard(composeMessage(data));
    showTempPopup("Data copied!", 5_000);
  });

  return dataButton;
}
