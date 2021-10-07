import operate from './operate';

test('adds 1+1 to equal 2', () => {
  expect(operate(1, 1, '+')).toBe('2');
});