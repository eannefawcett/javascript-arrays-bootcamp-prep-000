var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
var addme = "three musketeers"

//#1
function addElementToBeginningOfArray(chocolateBars, addme) {
  [chocolateBars.unshift(addme)]
}

//#6
function addElementToBeginningOfArray (chocolateBars, addme) { 
  [addme, ...chocolateBars]
}
  