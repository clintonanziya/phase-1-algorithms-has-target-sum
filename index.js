function hasTargetSum(array, target) {
  // Write your algorithm herefunction hasTargetSum(arr, target):
    // Loop through the array starting from the first element
    for i from 0 to arr.length - 1:
    // For each element at index i, loop through the array again starting from the element after it
    for j from i + 1 to arr.length - 1:
        // Check if the sum of the current element (arr[i]) and the element at index j equals the target
        if arr[i] + arr[j] equals target:
            // If the sum is equal to the target, return true
            return true

// If no pair of elements in the array sum up to the target, return false
return false

}

/* 
  Write the Big O time complexity of your function here
*/The total number of iterations for the inner loop can be approximated by the sum of the first n-1 integers, which is (n-1) * (n-1 + 1) / 2, or simply (n-1) * n / 2.

/* 
  Add your pseudocode here
*/function hasTargetSum(arr, target):
for i from 0 to length of arr - 1:
for j from i + 1 to length of arr - 1:
    if arr[i] + arr[j] equals target:
        return true
return false


/*
  Add written explanation of your solution here
*/function hasTargetSum(arr, target) {
    // Loop through the array starting from the first element
    for (let i = 0; i < arr.length; i++) {
      // For each element at index i, loop through the array again starting from the element after it
      for (let j = i + 1; j < arr.length; j++) {
          // Check if the sum of the current element (arr[i]) and the element at index j equals the target
          if (arr[i] + arr[j] === target) {
              // If the sum is equal to the target, return true
              return true;
          }
      }
  }
  // If no pair of elements in the array sum up to the target, return false
  return false;
}




// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
