const { getUsers } = require('./asyncTests');

test('getUsers gets 10 results by default', async () => {

  const actual = await getUsers()
  expect(actual.results.length).toBe(10)

})

test('getUsers gets however many results I ask for', async () => {

  const actual = await getUsers(20)
  expect(actual.results.length).toBe(20)

})

test('each of getUsers\' results has a valid `name` object', async () => {

  const actual = await getUsers(20)

  actual
    .results
    .forEach(result => {
      expect(typeof result.name.title)
        .toBe('string')
      expect(typeof result.name.first)
        .toBe('string')
      expect(typeof result.name.last)
        .toBe('string')
    })

})
