import {decrypt} from '../Utils';


describe('Decrypt function', () => {
  it('Decrypts functions correctly', function () {
    expect(decrypt(`mail@provider.com`)).eq(`moc.redivorp@liam`);
  });
});