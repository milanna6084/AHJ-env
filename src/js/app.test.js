import demo from './app';

test('should return same value as input value', () => {
  const result = demo('Hello');
  expect(result).toBe('Hello');
});
