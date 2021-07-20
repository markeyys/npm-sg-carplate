import { Prefix } from './enum/prefix';
import { Suffix } from './enum/suffix';
import { addPrefixAndCenterPlateNum } from './utils/sum';

export function generate(): string {
  const prefixAndPlateNum: string = generatePrefixAndNum();
  const prefixArray: number[] = Array.from(prefixAndPlateNum.slice(1, 3)).map(
    p => p.toLowerCase().charCodeAt(0) - 97 + 1
  );
  const plateNumArray: number[] = prefixArray.concat(
    Array.from(prefixAndPlateNum.slice(3, prefixAndPlateNum.length)).map(Number)
  );
  const suffix: string = Suffix[addPrefixAndCenterPlateNum(plateNumArray) % 19];
  return prefixAndPlateNum.concat(suffix);
}

//get sum of prefix
function generatePrefixAndNum(): string {
  const randomIndex: number = Math.floor(Math.random() * Prefix.length);
  let randomPrefix: string = Prefix[randomIndex];
  randomPrefix += Math.floor(1000 + Math.random() * 9000).toString();
  return randomPrefix;
}
