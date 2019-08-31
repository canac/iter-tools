import { combinationsWithReplacement } from '../../..';

describe('combinationsWithReplacement', () => {
  it('returns empty', () => {
    const iter = combinationsWithReplacement([]);
    expect(iter.getSize()).toEqual(0);
    expect(Array.from(iter)).toEqual([]);
  });

  it('returns combinationsWithReplacement', () => {
    const iter = combinationsWithReplacement([1, 2]);
    expect(iter.getSize()).toEqual(3);
    expect(Array.from(iter)).toEqual([[1, 1], [1, 2], [2, 2]]);
  });

  it('can be reused', () => {
    const iter = combinationsWithReplacement([1, 2]);
    expect(Array.from(iter)).toEqual([[1, 1], [1, 2], [2, 2]]);
    expect(Array.from(iter)).toEqual([[1, 1], [1, 2], [2, 2]]);
  });

  it.only('returns combinationsWithReplacement (max n)', () => {
    const iter = combinationsWithReplacement(2, [1, 2, 3, 4]);
    expect(iter.getSize()).toEqual(10);
    const expected = [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 4],
      [4, 4],
    ];

    expect(Array.from(iter)).toEqual(expected);
  });
});
