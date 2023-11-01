
function customDescendingSort(arr) {
    var n = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

var arrayToSort = [5, 2, 9, 1, 5, 6];
var sortedArray = customDescendingSort(arrayToSort);

console.log(sortedArray);
