import { Suffix } from './enum/suffix';
import { addPrefixAndCenterPlateNum } from './utils/sum';

export function validate(carplateNumber: string): boolean {
  const numberRegExp = /\d/g;
  if (!numberRegExp.test(carplateNumber)) {
    return false;
  }
  const carplateNumberArray: string[] = carplateNumber.split(/(\d+)/);
  if (!validatedFields(carplateNumberArray)) {
    return false;
  }
  let prefix: string = updatePrefix(carplateNumberArray[0]);
  let centerPlateNum: string = updateCenterPlateNumber(carplateNumberArray[1]);
  let suffix: string = carplateNumberArray[2];
  return checkSum(prefix, centerPlateNum, suffix);
}

function validatedFields(carplateNumberArray: string[]): boolean {
  const alphabetsRegExp = /[a-zA-Z]/g;
  const numberRegExp = /\d/g;
  if (carplateNumberArray[0].length == 0 || carplateNumberArray[1].length == 0 || carplateNumberArray[2].length != 1) {
    return false;
  }
  if (
    !alphabetsRegExp.test(carplateNumberArray[0]) ||
    !numberRegExp.test(carplateNumberArray[1]) ||
    !(carplateNumberArray[2].toLowerCase() != carplateNumberArray[2].toUpperCase())
  ) {
    return false;
  }
  return true;
}

function updateCenterPlateNumber(centerPlateNumber: string): string {
  if (centerPlateNumber.length < 4) {
    for (let i = centerPlateNumber.length; i < 4; i++) {
      centerPlateNumber = '0' + centerPlateNumber;
    }
  }
  return centerPlateNumber;
}

function updatePrefix(prefix: string): string {
  if (prefix.length > 2) {
    return prefix.slice(1, 3);
  }
  if (prefix.length < 2) {
    prefix = 'A' + prefix;
  }
  return prefix;
}

function checkSum(prefix: string, centerPlateNumber: string, suffix: string): boolean {
  const prefixToLowerCase = prefix.toLowerCase();
  const prefixArray: number[] = Array.from(prefixToLowerCase).map(p => p.toLowerCase().charCodeAt(0) - 97 + 1);
  const centerCarPlateNumArray: number[] = Array.from(centerPlateNumber).map(Number);
  const prefixAndCenterNumArray = prefixArray.concat(centerCarPlateNumArray);
  if (prefixAndCenterNumArray.length != 6) {
    return false;
  }
  let total = addPrefixAndCenterPlateNum(prefixAndCenterNumArray);
  return suffix.toUpperCase() == Suffix[total % 19];
}
