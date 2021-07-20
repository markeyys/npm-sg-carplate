import { validate } from '../src/validateCarplate';
import { invalidCarplate, validCarplate } from './CarplateSamples';
describe('validate Carplate', () => {
  test('Valid Carplate', async () => {
    validCarplate.forEach(it => expect(validate(it)).toBeTruthy());
  });

  test('Invalid Carplate', async () => {
    invalidCarplate.forEach(it => expect(validate(it)).toBeFalsy());
  });
});
