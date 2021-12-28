// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  const binary = num.toString(2)
  const array = binary.split('')
  return array.filter(number => number == 1).length
}

console.log(result(number));