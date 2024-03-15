import { buildRampsContainer } from './rampsBuilder.js';
import { buildSettingsContainer, createSettingsButton } from './settingsBuilder.js';

export function buildPage() {
  buildRampsContainer();
  buildSettingsContainer();
  createSettingsButton();
}


