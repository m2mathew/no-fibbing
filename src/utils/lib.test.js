import fibChecker from '..';

describe('fibChecker', () => {
  test('return false if 0', () => {
    expect(fibChecker(0)).toBe(false);
  });

  test('return false if negative', () => {
    expect(fibChecker(-1)).toBe(false);
  });

  test('return true if 1 is in sequence', () => {
    expect(fibChecker(1)).toBe(true);
  });

  test('return true if 2 is in sequence', () => {
    expect(fibChecker(2)).toBe(true);
  });

  test('return true if 3 is in sequence', () => {
    expect(fibChecker(3)).toBe(true);
  });

  test('return false since 4 is not in sequence', () => {
    expect(fibChecker(4)).toBe(false);
  });

  test('return true if 8 is in sequence', () => {
    expect(fibChecker(8)).toBe(true);
  });

  test('return true if 21 is in sequence', () => {
    expect(fibChecker(21)).toBe(true);
  });

  test('return true if 89 is in sequence', () => {
    expect(fibChecker(89)).toBe(true);
  });

  test('return false since 121 is not in sequence', () => {
    expect(fibChecker(121)).toBe(false);
  });
});
