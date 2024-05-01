import { expect, test } from 'vitest'
import { spaceTokenizer } from '../../src/tokenizers/SpaceWordTokenizer'

test('it should count all characters from input text', () => {
  const input = 'This is a simple test!'

  const result = spaceTokenizer(input)

  expect(result.charCount).toBe(22)
})

test('it should count all words from input text', () => {
  const input = 'The quick brown fox jumps over the lazy dog'

  const result = spaceTokenizer(input)

  expect(result.wordCount).toBe(9)
})

test('it should count all tokens from input text', () => {
  const input = 'Voxy is a really cool company'

  const result = spaceTokenizer(input)

  expect(result.tokenCount).toBe(11)
})

test('it should tokenize from input text', () => {
  const input = 'Voxy is a really cool company'

  const result = spaceTokenizer(input)

  const expected = ['Voxy', ' ', 'is', ' ', 'a', ' ', 'really', ' ', 'cool', ' ', 'company']

  expect(result.tokens).toStrictEqual(expected)
})

test('it should consider trailing spaces as part of the same token', () => {
  const input = 'i really  love   coffee!'

  const result = spaceTokenizer(input)

  const expectedTokens = ['i', ' ', 'really', '  ', 'love', '   ', 'coffee!']
  const expectedTokenCount = 7

  expect(result.tokens).toStrictEqual(expectedTokens)
  expect(result.tokenCount).toStrictEqual(expectedTokenCount)
})
