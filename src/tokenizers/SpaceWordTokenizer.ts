export const spaceTokenizer = (words: string) => {
  const tokens = []
  const wordList = []

  for (let i = 0; i < words.length; i++) {
    if (i === 0 && tokens.length === 0) {
      if (words[i] === ' ') continue

      tokens.push(words[i])
      wordList.push(words[i])
      continue
    }

    if (words[i] === ' ' && tokens.at(-1)?.at(-1) !== ' ') {
      tokens.push(' ')
      continue
    }

    if (words[i] !== ' ' && tokens.at(-1)?.at(-1) === ' ') {
      tokens.push(words[i])
      wordList.push(words[i])
      continue
    }

    tokens[tokens.length - 1] += words[i]
    wordList[wordList.length - 1] += words[i]
  }

  return {
    tokens: tokens,
    tokenCount: tokens.length,
    charCount: words.length,
    wordCount: wordList.length
  }
}
