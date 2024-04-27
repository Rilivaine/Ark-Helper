import { createNavBar } from './navBar.js';
import { buildRampsContainer } from './rampsBuilder.js';
import { buildSettingsContainer } from './settingsBuilder.js';

export function buildPage() {
  buildRampsContainer();
  buildSettingsContainer();
  createNavBar();
}


