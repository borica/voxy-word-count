# Voxy Word Count Challenge

This is a tiny project made as part of Voxy Software Engineer hiring process.

Technologies used:
- Vite
- Vue 3
- Typescript
- Vitest
- Netlify (hosting)

### Preview
To avoid the extra work of booting up the project, it can be previewed at this address:

[Voxy Word Count](https://voxy-word-count.netlify.app/)

### Objective:
- The task is to create a user-facing form that counts the number of words in a
block of text.

### Strategy
The strategy adopted for word counting was space tokenization. This means that:

Words:
- It is considered a word if the current char is a space and the previous is not;

Tokens
- Each word and it's space delimiter will be taken into account for tokenization;
- Trailing spaces are considered part of the same token;
- Punctuations, quoted words and overall special characters are considered part of the closest token.

## Running the project

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
