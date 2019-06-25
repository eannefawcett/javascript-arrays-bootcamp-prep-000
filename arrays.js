var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
var addme = "three musketeers"

function addElementToBeginningOfArray(addme, chocolateBars) {
  chocolateBars.push(addme)
}

function addElementToBeginningOfArray (addme, chocolateBars) {
  [addme, ...chocolateBars]
}
  