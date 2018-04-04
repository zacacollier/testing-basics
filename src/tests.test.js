const { addTwo } = require('./tests');

test('addTwo adds two', () => {

  const actual = addTwo(2);
  const expected = 4;

  expect(actual)
    .toEqual(expected);

});
