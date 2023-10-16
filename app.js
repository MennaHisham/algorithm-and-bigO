// function sumNumbers(numbers) {
//     return numbers[0] + numbers[1] + numbers[2];
// } //O(1)

function sumNumbers(numbers) {
  let result = 0; //1
  for (const number of numbers) {
    //1
    result += number; //4 => n
  }
  return result; //1
} //O(n)

//T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
//T = 1*n = n => O(n) => Linear Time Complexity

console.log(sumNumbers([1, 3, 10])); //should yield 14
