export function showTempPopup(text, timeInMs) {
  const oldPopup = document.getElementById('popup');
  if (oldPopup) {
    oldPopup.remove();
  }

  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.textContent = text;
  document.body.append(popup);

  setTimeout(() => {
    popup.remove();
  }, timeInMs);
}
