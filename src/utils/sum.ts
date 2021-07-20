export function addPrefixAndCenterPlateNum(prefixAndCenterPlateNum: number[]): number {
  let sum = 0;
  const multipliedArray: number[] = [9, 4, 5, 4, 3, 2];
  for (let i = 0; i < prefixAndCenterPlateNum.length; i++) {
    sum += prefixAndCenterPlateNum[i] * multipliedArray[i];
  }
  return sum;
}
