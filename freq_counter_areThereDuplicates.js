function areThereDuplicates() {
  let input = {}
  for(let val in arguments){
      input[arguments[val]] = (input[arguments[val]] || 0) + 1
  }
  for(let key in input){
  if(input[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3, 0));