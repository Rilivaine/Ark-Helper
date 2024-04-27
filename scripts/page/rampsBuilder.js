import { loadDataFromLocalStorage } from "../data/dataOperations.js";
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
}

function createInput(className, id, /* value, */ text = true) {
  const input = document.createElement('input');
  input.classList.add(className);
  //input.value = value ?? '';
  input.setAttribute('type', text ? 'text' : 'number');
  input.setAttribute('data-ramp', id?.toString());

  return input;
}
