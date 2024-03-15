export function toggleSettings() {
  const rampsContainer = document.getElementById('container-ramps');
  const settingsContainer = document.getElementById('container-settings');

  if (rampsContainer.style.display == 'none') {
    rampsContainer.style.display = 'flex';
    settingsContainer.style.display = 'none';
  } else {
    rampsContainer.style.display = 'none';
    settingsContainer.style.display = 'flex';
  }
}
