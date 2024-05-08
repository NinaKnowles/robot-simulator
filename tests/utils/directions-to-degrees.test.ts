import { degreesToDirection } from '../../src/utils/directions-to-degrees';

describe('degreesToDirection function', () => {
  test('returns the correct direction for given degrees', () => {
    expect(degreesToDirection(0)).toBe('north');
    expect(degreesToDirection(90)).toBe('east');
    expect(degreesToDirection(180)).toBe('south');
    expect(degreesToDirection(270)).toBe('west');
  });

  test('returns unknown for degrees not in the predefined directions', () => {
    expect(degreesToDirection(45)).toBe('unknown');
    expect(degreesToDirection(135)).toBe('unknown');
    expect(degreesToDirection(225)).toBe('unknown');
    expect(degreesToDirection(315)).toBe('unknown');
  });
});
