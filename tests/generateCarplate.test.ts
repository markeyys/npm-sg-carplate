import { Prefix } from '../src/enum/prefix';
import { Suffix } from '../src/enum/suffix';
import { generate } from '../src/generateCarplate';
import { addPrefixAndCenterPlateNum } from '../src/utils/sum';

describe('Generate Carplate', () => {
  let carplate = '';

  beforeAll(() => {
    carplate = generate();
  });

  test('Carplate contains correct length', () => {
    expect(carplate.length == 8);
  });

  test('Carplate prefix is in enum', () => {
    const prefix = carplate.slice(0, 3);
    expect(Prefix).toContain(prefix);
  });

  test('Carplate checksum is correct', () => {
    const prefixArray: number[] = Array.from(carplate.slice(1, 3)).map(p => p.toLowerCase().charCodeAt(0) - 97 + 1);
    const combineArray = prefixArray.concat(Array.from(carplate.slice(3, test.length - 1)).map(Number));
    const sum: number = addPrefixAndCenterPlateNum(combineArray);
    const calculatedSuffix = Suffix[sum % 19];
    expect(calculatedSuffix).toEqual(carplate.slice(-1));
  });
});
