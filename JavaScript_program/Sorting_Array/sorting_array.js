function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const originalArray = [10, 5, 8, 1, 4, 7];
const sortedArray = sortArrayDescending(originalArray);

console.log('Array sorted in descending order:', sortedArray);
