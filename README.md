# Voxy Word Count Challenge

This is a Vue3 project made as part of Voxy Software Engineer hiring process.

### Objective:
- The task is to create a user-facing form that counts the number of words in a
block of text.

### Strategy
The strategy adopted for word counting was space tokenization. This means that:
- Each word and it's space delimiter will be taken into account;
- If a "space word" has more than one space character;
- Punctuations, quoted words and overall special characters are considered part of the closest word.

## Running the project

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
