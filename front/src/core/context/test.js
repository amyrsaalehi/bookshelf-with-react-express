Promise((resolve, reject) => resolve(2))
  .then(v => {
    console.log(v)
    return v * 2
  })
  .then(v => {
    console.log(v)
    return v * 2
  })
  .finally(v => {
    console.log(v)
    return v * 2
  })
  .then(v => {
    console.log(v)
    return v * 2
  })
  .then(v => {
    console.log(v)
    return v * 2
  })

/**
 * output
 *
 * 2
 * 4
 * undefined
 * 16
 * 32
 */