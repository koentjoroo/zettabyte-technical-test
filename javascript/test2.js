// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const returnUnique = (accumulated, current) => accumulated.includes(current) ? accumulated : [...accumulated, current]

const highest = () => -1

function result(arr1, arr2) {
  const mutated = arr1.reduce(returnUnique, [...arr2])
  const odds = mutated.filter(item => item % 2 !== 0)
  const evens = mutated.filter(item => item % 2 === 0)
  return [
    ...odds.filter(item => !arr1.includes(item)).sort(highest),
    ...arr1,
    ...evens.filter(item => !arr1.includes(item))
  ]
}

console.log(result(arr1, arr2));