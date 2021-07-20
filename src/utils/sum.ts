export function addPrefixAndCenterPlateNum(prefixAndCenterPlateNum: number[]): number {
  const multipliedArray: number[] = [9, 4, 5, 4, 3, 2];
  return prefixAndCenterPlateNum.map((i, index) => i * multipliedArray[index])
                        .reduce((a,b) => a +b);
}
