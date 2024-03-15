import { clearDataFromInputs } from '../data/rampData.js';
import { showTempPopup } from '../utils/popup.js';
import { toggleSettings } from '../utils/settings.js';
import { saveRampRange } from '../data/rampRange.js';
import { loadDataFromLocalStorage } from '../data/dataOperations.js';

export function buildSettingsContainer() {
  const settingsContainer = document.createElement('div');
  settingsContainer.id = 'container-settings';
  settingsContainer.style.display = 'none';

  const clearDataButton = document.createElement('div');
  clearDataButton.id = 'clear-data-button';
  clearDataButton.classList.add('square-button', 'fa-regular', 'fa-trash-can');
  clearDataButton.addEventListener('click', () => {
    clearDataFromInputs();
    showTempPopup("Data cleared!", 5_000);
  });
  settingsContainer.append(clearDataButton);


  settingsContainer.append(createRangeInput());

  document.body.append(settingsContainer);
}

export function createSettingsButton() {
  const settingsButton = document.createElement('div');
  settingsButton.id = 'settings-button';
  settingsButton.classList.add('square-button', 'fa-solid', 'fa-gear');

  settingsButton.addEventListener('click', () => {
    toggleSettings();
  });
  document.body.append(settingsButton);
}

function createRangeInput() {
  const rampRangeInputWrapper = document.createElement('div');
  rampRangeInputWrapper.id = 'ramp-range-input-wrapper';

  const rampRangeInput = document.createElement('input');
  const rampRange = loadDataFromLocalStorage('rampsRanges');
  rampRangeInput.id = 'ramp-range-input';
  rampRangeInput.value = rampRange ?? '';
  rampRangeInputWrapper.append(rampRangeInput);

  const rampRangeButton = document.createElement('div');
  rampRangeButton.id = 'ramp-range-button';
  rampRangeButton.classList.add('square-button', 'fa-regular', 'fa-floppy-disk');
  rampRangeButton.addEventListener('click', () => {
    saveRampRange();
    showTempPopup("Range set!\nReload the page", 5_000);
  });
  rampRangeInputWrapper.append(rampRangeButton);

  return rampRangeInputWrapper;
}
