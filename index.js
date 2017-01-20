function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  var lama = [1, 2, 3]
  lama.forEach(callback)
  return lama
}

function doToArray(array, callback) {
  array.forEach(callback)
}
