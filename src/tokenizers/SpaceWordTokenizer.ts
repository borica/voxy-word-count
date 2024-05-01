export const spaceTokenizer = (words: string) => {
  const tokens = []
  for (let i = 0; i < words.length; i++) {
    if (i === 0 && tokens.length === 0) {
      tokens.push(words[i])
      continue
    }

    if (words[i] === ' ' && tokens.at(-1).at(-1) !== ' ') {
      tokens.push(' ')
      continue
    }

    if (words[i] !== ' ' && tokens.at(-1).at(-1) === ' ') {
      tokens.push(words[i])
      continue
    }

    tokens[tokens.length - 1] += words[i]
  }

  return {
    tokens: tokens,
    tokenCount: tokens.length,
    charCount: words.length
  }
}
