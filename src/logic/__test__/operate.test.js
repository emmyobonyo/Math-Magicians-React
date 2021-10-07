import operate from './operate';

test('adds 4+5 to equal 2', () => {
  expect(operate(4, 5, '+')).toBe('9');
});
test('subtract 7-1 to equal 6', () => {
    expect(operate(7, 1, '-')).toBe('6');
  });
  test('divide 24÷2 to equal 12', () => {
    expect(operate(24, 2, '÷')).toBe('12');
  });
  test('mutiply 26÷2 to return a 13', () => {
    expect(operate(26, 2, '÷')).toBe('13');
  });
  test('mutplication 10 X 6 to equal 60', () => {
    expect(operate(10, 6, 'x')).toBe('60');
  });
  test('Modulus 23 % 2 to equal 1', () => {
    expect(operate(23, 2, '%')).toBe('1');
  });
  test('throw an error if passed a wrong operation', () => {
    expect(() => operate(2, 4, '&')).toThrow();
  });
