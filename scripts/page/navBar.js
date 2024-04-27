import { saveDataToLocalStorage } from '../data/dataOperations.js';
import { getDataFromInputs } from '../data/rampData.js';
import { composeMessage } from '../utils/message.js';
import { copyToClipboard } from '../utils/copy.js';
import { showTempPopup } from '../utils/popup.js';
import { toggleSettings } from '../utils/settings.js';

export function createNavBar() {
  const navBar = document.createElement('div');
  navBar.id = 'nav-bar';

  navBar.append(createDataButton(), createSettingsButton());

  document.body.append(navBar);
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


export function createSettingsButton() {
  const settingsButton = document.createElement('div');
  settingsButton.id = 'settings-button';
  settingsButton.classList.add('square-button', 'fa-solid', 'fa-gear');

  settingsButton.addEventListener('click', () => {
    toggleSettings();
  });

  return settingsButton;
}
