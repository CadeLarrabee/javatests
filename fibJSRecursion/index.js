// Using iteration, write a function fibs which takes a number and returns
// an array containing that many numbers from the Fibonacci sequence.
//  Using an example input of 8,
//  this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibRecursive(fibNum, array, iterator) {
  if (iterator >= fibNum) {
    return array;
  } else if (iterator == 0) {
    array.push(0);
  } else if (iterator < 2) {
    array.push(1);
  } else {
    array.push(array[iterator - 1] + array[iterator - 2]);
  }
  return fibRecursive(fibNum, array, iterator + 1);
}

//let array = [];
//console.log(fibRecursive(8, array, 0));

//let array = [];
//fibRecursive(8, array, 0);
//console.log(fibNorm(8));
