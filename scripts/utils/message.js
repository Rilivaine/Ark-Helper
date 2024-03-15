import { callbackForRampRanges } from '../data/rampRange.js';
import { loadDataFromLocalStorage } from '../data/dataOperations.js';
import { parseRawRampRange } from '../data/rampRange.js';

export function composeMessage(data) {
  const rampsRanges = parseRawRampRange(loadDataFromLocalStorage('rampsRanges'));
  let message = '';

  callbackForRampRanges(rampsRanges, (i) => {
    message += `${i} -> ${data?.[i].containerNumber ?? data?.[i].truckNumber ?? "-"}${data?.[i].containerNumber ? data?.[i].truckNumber ? ' | ' + data?.[i].truckNumber : "" : ""}\n`;
  });

  return message;
}
