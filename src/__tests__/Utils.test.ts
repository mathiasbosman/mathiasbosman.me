import {decrypt} from '../Utils';
import {expect} from '@jest/globals';


describe(`Decrypt function`, () => {
  test(`Decrypts correctly`, () => {
    expect(decrypt(`Hello`)).toBe(`olleH`);
  });
  test(`Decrypts special characters correctly`, () => {
    expect(decrypt(`mail@provider.com`)).toBe(`moc.redivorp@liam`);
  });
});
