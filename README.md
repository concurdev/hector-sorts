# hector-sorts: Sorting Algorithms

This package provides a collection of common sorting algorithms implemented in JavaScript. These sorting algorithms can be used to sort arrays of numbers or any comparable elements.

## Installation

You can install the package via npm:

```bash
npm i hector-sorts
```

## Usage

```javascript
const sortingAlgorithms = require("hector-sorts");

// Example usage of sorting algorithms
const arr = [5, 3, 8, 1, 2, 7, 4, 6];

// Bubble Sort
console.log("Bubble Sort:", sortingAlgorithms.bubbleSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Selection Sort
console.log("Selection Sort:", sortingAlgorithms.selectionSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Insertion Sort
console.log("Insertion Sort:", sortingAlgorithms.insertionSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Merge Sort
console.log("Merge Sort:", sortingAlgorithms.mergeSort(arr.slice()));
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// Quick Sort
console.log("Quick Sort:", sortingAlgorithms.quickSort(arr.slice()));
// Time Complexity: O(n log n) average case, O(n^2) worst case
// Space Complexity: O(log n)

// Heap Sort
console.log("Heap Sort:", sortingAlgorithms.heapSort(arr.slice()));
// Time Complexity: O(n log n)
// Space Complexity: O(1)

// Counting Sort
// primarily designed for sorting arrays of numbers
console.log("Counting Sort:", sortingAlgorithms.countingSort(arr.slice()));
// Time Complexity: O(n + k) where k is the range of the input
// Space Complexity: O(n + k)

// Radix Sort
// Operates on integer keys and expects arrays of numbers for sorting. Sorting arrays of strings may lead to unexpected behavior.
console.log("Radix Sort:", sortingAlgorithms.radixSort(arr.slice()));
// Time Complexity: O(nk) where k is the number of digits in the largest number
// Space Complexity: O(n + k)

// Bucket Sort
// Can handle arrays of strings, its primary use case is sorting arrays of numbers. Sorting arrays of strings may not produce the expected results.
console.log("Bucket Sort:", sortingAlgorithms.bucketSort(arr.slice()));
// Time Complexity: O(n^2) worst case, but typically O(n + k) when k is the number of buckets
// Space Complexity: O(n + k)

// Shell Sort
console.log("Shell Sort:", sortingAlgorithms.shellSort(arr.slice()));
// Time Complexity: O(n log^2 n)
// Space Complexity: O(1)

// Cocktail Shaker Sort
console.log(
  "Cocktail Shaker Sort:",
  sortingAlgorithms.cocktailShakerSort(arr.slice())
);
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Comb Sort
console.log("Comb Sort:", sortingAlgorithms.combSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Gnome Sort
console.log("Gnome Sort:", sortingAlgorithms.gnomeSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Cycle Sort
console.log("Cycle Sort:", sortingAlgorithms.cycleSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Pancake Sort
// Pancake Sort is primarily designed for sorting arrays of numbers, not arrays of strings.
console.log("Pancake Sort:", sortingAlgorithms.pancakeSort(arr.slice()));
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Bogosort
console.log("Bogosort:", sortingAlgorithms.bogoSort(arr.slice()));
// Time Complexity: O((n+1)!)
// Space Complexity: O(1)

// Stooge Sort
console.log("Stooge Sort:", sortingAlgorithms.stoogeSort([...arr]));
// Time Complexity: O(n^(log 3 / log 1.5)) = O(n^2.7095)
// Space Complexity: O(1)

// Bitonic Sort
// Special Requirements: Bitonic sort requires the input size to be a power of 2.
console.log(
  "Bitonic Sort (Ascending):",
  sortingAlgorithms.bitonicSort([...arr])
);
console.log(
  "Bitonic Sort (Descending):",
  sortingAlgorithms.bitonicSort([...arr], false)
);
// Time Complexity: O(log^2 n)
// Space Complexity: O(n log n)

// Timsort
console.log("Timsort:", sortingAlgorithms.timSort([...arr]));
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// Introsort
console.log("Introsort:", sortingAlgorithms.introSort([...arr]));
// Time Complexity: O(n log n)
// Space Complexity: O(log n)

// Strand Sort
console.log("Strand Sort:", sortingAlgorithms.strandSort([...arr]));
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// Library Sort
// Special Requirements: Library sort works best for sorting numbers. It may not behave as expected for arrays containing non-numeric elements.
console.log("Library Sort:", sortingAlgorithms.librarySort([...arr]));
// Time Complexity: O(n log n)
// Space Complexity: O(n)
```
