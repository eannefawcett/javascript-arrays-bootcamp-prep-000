var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
var addme = "three musketeers"

function addElementToBeginningOfArray(chocolateBars, addme) {
  chocolateBars.push(addme)
}

function addElementToBeginningOfArray (chocolateBars, addme) {
  [addme, ...chocolateBars]
}
  