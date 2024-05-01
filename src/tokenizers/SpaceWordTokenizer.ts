export const spaceTokenizer = (words: string) => {
  const tokens = []
  const wordList = []

  for (let i = 0; i < words.length; i++) {
    const isSpace = words[i] === ' '
    const isTrailing = isSpace && tokens.at(-1)?.at(-1) === ' '
    const isLastSpace = tokens.at(-1)?.at(-1) === ' '

    if (i === 0 && tokens.length === 0) {
      if (isSpace) continue

      tokens.push(words[i])
      wordList.push(words[i])
      continue
    }

    if (isSpace && !isTrailing) {
      tokens.push(' ')
      continue
    }

    if (!isSpace && isLastSpace) {
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
