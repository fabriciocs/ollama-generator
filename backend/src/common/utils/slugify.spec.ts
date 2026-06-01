import { slugifyProductName } from './slugify';

describe('slugifyProductName', () => {
  it('normalizes accents and spaces', () => {
    expect(slugifyProductName('Sistema de Gestão de Obras Pequenas')).toBe(
      'sistema-de-gestao-de-obras-pequenas',
    );
  });
});
