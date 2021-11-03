export const makePascalCase = (word) => {
  return word.replace(/(\w)(\w*)/g,
    (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
  ).replaceAll('-', ' ')
}

export const makeOriginal = (word) => {
  return word.replaceAll('-', ' ')
}