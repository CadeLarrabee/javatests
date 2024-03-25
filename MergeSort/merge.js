let array = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array){
//if the array is size 1, return
//sort the left array
//sort the right array
//merge the arrays
if (array.length == 1){
	return array;
}
//cut the array in half
//array.slice(length.half)
const halves = cutArrayInHalf(array);

//with the left half, call merge sort
//mergeSort(array.left)
const sortLeft = mergeSort(halves[0]);

//call it again with the right half
//mergeSort(array.right)
const sortRight = mergeSort(halves[1]);

//merge them back together, by checking each element from both halves one by one >
//mergeArray
const mergedArray = arrSort(sortLeft,sortRight);

return mergedArray;
}

function arrSort(leftArr, rightArr){
let sortedArray = [];
let i = 0;
let j = 0;

//the right side is longer so we start there
while(i < leftArr.length && j < rightArr.length){
	if(leftArr[i] <= rightArr[j]){
  	sortedArray.push(leftArr[i]);
    i++;
  }
  else{
  	sortedArray.push(rightArr[j]);
    j++;
  }
 }
 // Add remaining elements from the left array, if any
    while (i < leftArr.length) {
        sortedArray.push(leftArr[i]);
        i++;
    }

    // Add remaining elements from the right array, if any
    while (j < rightArr.length) {
        sortedArray.push(rightArr[j]);
        j++;
    }

return sortedArray;
}

function cutArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);
  return [firstHalf, secondHalf];
}

console.log(mergeSort(array));

/* function arrSort(leftArr, rightArr){
  let sortedArray = [];
  let leftcounter = 0;
  for(let i = 0; i < rightArr.length; i++){
    if (rightArr[i] > leftArr[leftcounter]){
      sortedArray.push(leftArr.slice(leftcounter));
      leftcounter++;
    }
    else{
    sortedArray.push(rightArr.slice(i));
    }
  }
  return sortedArray;
} */