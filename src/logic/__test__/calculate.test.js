import calculate from '../calculate';

test('AC clears the screen', () => {
  const obj = {
    total: 15,
    next: 90,
    operation: '+',
  };
  expect(calculate(obj, 'AC')).toEqual({
    total: 0,
    next: null,
    operation: null,
  });
});

test('to see that double decimals are not added', () => {
  const obj = {
    total: null,
    next: '9.',
    operation: null,
  };
  expect(calculate(obj, '.')).toEqual({
    ...obj,
  });
});

test('to see that the next variable is given a value', () => {
  const obj = {
    total: null,
    next: '9',
    operation: null,
  };
  expect(calculate(obj, '.')).toEqual({
    ...obj, next: `${obj.next}.`,
  });
});

test('to see that a decimal is added if an operation is added', () => {
  const obj = {
    total: null,
    next: '0',
    operation: '+',
  };
  expect(calculate(obj, '.')).toEqual({
    total: null,
    next: '0.',
    operation: '+',
  });
});

test('to see that an empty object is returned if a decimal is added to the total', () => {
  const obj = {
    total: '90.9',
    next: null,
    operation: null,
  };
  expect(calculate(obj, '.')).toEqual({});
});

test('to see that the value of total is updated on decimal press if total does not have a decimal point', () => {
  const obj = {
    total: '90',
    next: null,
    operation: null,
  };
  expect(calculate(obj, '.')).toEqual({
    total: `${obj.total}.`,
  });
});

test('to see that the "=" works if the user enters a number and an operation', () => {
  const obj = {
    total: '99',
    next: '69',
    operation: '+',
  };
  expect(calculate(obj, '=')).toEqual({
    total: (parseInt(obj.total, 10) + parseInt(obj.next, 10)).toString(),
    next: null,
    operation: null,
  });
});

test('to see that an empty object is returned on "=" if no operation and next value are assigned', () => {
  const obj = {
    total: '89',
    next: null,
    operation: null,
  };
  expect(calculate(obj, '=')).toEqual({});
});

test('to see that a negative sign is placed infront of a number', () => {
  const obj = {
    total: '90',
    next: '89',
    operation: null,
  };
  expect(calculate(obj, '+/-')).toEqual({
    total: '90',
    next: '-89',
    operation: null,
  });
});

test('to see that a negative number is placed infront of total', () => {
  const obj = {
    total: '99',
    next: null,
    operation: null,
  };
  expect(calculate(obj, '+/-')).toEqual({
    total: '-99',
    next: null,
    operation: null,
  });
});
