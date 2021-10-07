import calculate from '../calculate';

test('AC clears the screen', () => {
  const obj = {
    total: 15,
    next: 90,
    operation: '+'
  };
  expect(calculate(obj, 'AC')).toEqual({
    total: 0,
    next: null,
    operation: null
  });
});

test('to see that double decimals are not added', () => {
  const obj = {
    total: null,
    next: '9.',
    operation: null
  }
  expect(calculate(obj, '.')).toEqual({
    ...obj
  })
})

test('to see that the next variable is given a value', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null
  }
  expect(calculate(obj, '.')).toEqual({
    ...obj, next: `${obj.next}.`,
  })
})
