// tests/index.test.js
const soma = require('../src/index');

test('soma 1 + 2 para igualar 3', () => {
  expect(soma(1, 2)).toBe(3);
});
