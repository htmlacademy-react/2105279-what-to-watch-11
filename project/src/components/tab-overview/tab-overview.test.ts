import { getRatingString } from './tab-overview';

const iteratingValues = (min: number, max: number, callback: (value: number) => void) => {
  for (let i = min; i < max; i++) {
    callback(i);
  }
};

describe('Function: getRatingString', () => {
  test('от 0 до 3 должно возвращать Bad', () => {
    iteratingValues(0, 3, (value) =>
      expect(getRatingString(value))
        .toBe('Bad'));
  });

  test('от 3 до 5 должно возвращать Normal', () => {
    iteratingValues(3, 5, (value) =>
      expect(getRatingString(value))
        .toBe('Normal'));
  });

  test('от 5 до 8 должно возвращать Good', () => {
    iteratingValues(5, 8, (value) =>
      expect(getRatingString(value))
        .toBe('Good'));
  });

  test('от 8 до 10 должно возвращать Very good', () => {
    iteratingValues(8, 10, (value) =>
      expect(getRatingString(value))
        .toBe('Very good'));
  });

  test('10 должно возвращать Awesome', () => {
    iteratingValues(10, 10, (value) =>
      expect(getRatingString(value))
        .toBe('Awesome'));
  });
});
