// function removeDuplicates(arr) {
//   const uniqueArr = new Set(arr);
//   return uniqueArr;
// }

function removeDuplicates(arr) {
  const uniqueArr = [];
  for (i = 0; i < arr.length; i++) {
    if (uniqueArr.includes(arr[i])) continue;
    uniqueArr.push(arr[i]);
  }

  return uniqueArr;
}

module.exports = removeDuplicates;
