import { assertInsideBaseDir } from './path-safety';

describe('assertInsideBaseDir', () => {
  it('allows safe nested paths', () => {
    expect(
      assertInsideBaseDir('C:\\tmp\\base', 'C:\\tmp\\base\\file.txt'),
    ).toContain('file.txt');
  });
});
