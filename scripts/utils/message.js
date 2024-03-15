import { callbackForRampRanges } from '../data/rampRange.js';

export function composeMessage(data) {
  let message = '';

  callbackForRampRanges(data, (i) => {
    message += `${i} -> ${data?.[i].containerNumber ?? data?.[i].truckNumber ?? "-"}${data?.[i].containerNumber ? data?.[i].truckNumber ? ' | ' + data?.[i].truckNumber : "" : ""}\n`;
  });

  return message;
}
