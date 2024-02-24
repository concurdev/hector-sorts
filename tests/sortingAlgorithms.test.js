const sortingAlgorithms = require('../sortingAlgorithms');

describe('Bubble Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.bubbleSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.bubbleSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.bubbleSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Selection Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.selectionSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.selectionSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.selectionSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Insertion Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.insertionSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.insertionSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.insertionSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Merge Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.mergeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.mergeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.mergeSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Quick Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.quickSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.quickSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.quickSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Heap Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.heapSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.heapSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.heapSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Counting Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.countingSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.countingSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Radix Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.radixSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.radixSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Bucket Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.bucketSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.bucketSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Shell Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.shellSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.shellSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.shellSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Cocktail Shaker Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.cocktailShakerSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.cocktailShakerSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.cocktailShakerSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Comb Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.combSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.combSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.combSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Gnome Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.gnomeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.gnomeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.gnomeSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Cycle Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.cycleSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.cycleSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.cycleSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Pancake Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.pancakeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.pancakeSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Bogo Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.bogoSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.bogoSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.bogoSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Stooge Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.stoogeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.stoogeSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.stoogeSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Bitonic Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6, 9]; // Removed the trailing comma
        const sortedArr = sortingAlgorithms.bitonicSort([...arr]);
        const expectedArr = [...arr].sort((a, b) => a - b);
        expect(sortedArr).toEqual(expectedArr);
    });
});

describe('Tim Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.timsort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });
});

describe('Intro Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.introSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.introSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.introSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Strand Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.strandSort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an array of strings in lexicographical order', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const sortedArr = sortingAlgorithms.strandSort([...arr]);
        expect(sortedArr).toEqual(arr.sort());
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.strandSort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});

describe('Library Sort', () => {
    test('Sorts an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 1, 2, 7, 4, 6];
        const sortedArr = sortingAlgorithms.librarySort([...arr]);
        expect(sortedArr).toEqual(arr.sort((a, b) => a - b));
    });

    test('Sorts an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const sortedArr = sortingAlgorithms.librarySort([...arr]);
        expect(sortedArr).toEqual(arr);
    });
});
