// sortingAlgorithms.js

// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Selection Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Insertion Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Merge Sort
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
// Time Complexity: O(n log n)
// Space Complexity: O(log n) - average case
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Heap Sort
// Time Complexity: O(n log n)
// Space Complexity: O(1)
function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    const len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i);
    }

    for (let i = len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// Counting Sort
// Time Complexity: O(n + k)
// Space Complexity: O(k)
function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const count = Array(max - min + 1).fill(0);
    const output = [];

    arr.forEach(num => count[num - min]++);
    count.forEach((freq, num) => {
        for (let i = 0; i < freq; i++) {
            output.push(num + min);
        }
    });

    return output;
}

// Radix Sort
// Time Complexity: O(nk)
// Space Complexity: O(n + k)
function radixSort(arr) {
    const max = Math.max(...arr);
    const maxDigitCount = Math.floor(Math.log10(max)) + 1;
    let digitBuckets;

    for (let k = 0; k < maxDigitCount; k++) {
        digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }

    return arr;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Bucket Sort
// Time Complexity: O(n + k)
// Space Complexity: O(n)
function bucketSort(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucketSize = 5;
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    arr.forEach(num => {
        const bucketIndex = Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    });

    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b));
}

// Shell Sort
// Time Complexity: O(n log^2 n)
// Space Complexity: O(1)
function shellSort(arr) {
    const len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Cocktail Shaker Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function cocktailShakerSort(arr) {
    let swapped = true;
    let start = 0;
    let end = arr.length - 1;

    while (swapped) {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        if (!swapped) break;

        swapped = false;
        end--;

        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        start++;
    }

    return arr;
}

// Comb Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function combSort(arr) {
    const shrinkFactor = 1.3;
    let gap = arr.length;
    let swapped = true;

    while (gap > 1 || swapped) {
        if (gap > 1) gap = Math.floor(gap / shrinkFactor);

        let i = 0;
        swapped = false;

        while (i + gap < arr.length) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                swapped = true;
            }
            i++;
        }
    }

    return arr;
}

// Gnome Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function gnomeSort(arr) {
    let i = 1;

    while (i < arr.length) {
        if (i === 0 || arr[i] >= arr[i - 1]) {
            i++;
        } else {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        }
    }

    return arr;
}

// Cycle Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function cycleSort(arr) {
    for (let cycleStart = 0; cycleStart < arr.length - 1; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;

        for (let i = cycleStart + 1; i < arr.length; i++) {
            if (arr[i] < item) pos++;
        }

        if (pos === cycleStart) continue;

        while (item === arr[pos]) pos++;

        let temp = arr[pos];
        arr[pos] = item;
        item = temp;

        while (pos !== cycleStart) {
            pos = cycleStart;

            for (let i = cycleStart + 1; i < arr.length; i++) {
                if (arr[i] < item) pos++;
            }

            while (item === arr[pos]) pos++;

            temp = arr[pos];
            arr[pos] = item;
            item = temp;
        }
    }

    return arr;
}

// Pancake Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function pancakeSort(arr) {
    function flip(arr, end) {
        let start = 0;
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        let maxIndex = arr.indexOf(Math.max(...arr.slice(0, i + 1)));
        flip(arr, maxIndex);
        flip(arr, i);
    }

    return arr;
}

// Bogosort
// Time Complexity: O((n+1)!)
// Space Complexity: O(1)
function bogoSort(arr) {
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    while (!isSorted(arr)) {
        arr = shuffle(arr);
    }

    return arr;
}

// Stooge Sort
// Time Complexity: O(n^(log 3 / log 1.5)) = O(n^2.7095)
// Space Complexity: O(1)
function stoogeSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return;

    if (arr[low] > arr[high]) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
    }

    if (high - low + 1 > 2) {
        const t = Math.floor((high - low + 1) / 3);
        stoogeSort(arr, low, high - t);
        stoogeSort(arr, low + t, high);
        stoogeSort(arr, low, high - t);
    }

    return arr;
}

// Bitonic Sort
// Time Complexity: O(log^2 n)
// Space Complexity: O(n log n)
function bitonicSort(arr, up = true) {
    const merge = (arr, low, count, up) => {
        if (count > 1) {
            const k = count / 2;
            for (let i = low; i < low + k; i++) {
                if ((arr[i] > arr[i + k]) === up) {
                    [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
                }
            }
            merge(arr, low, k, up);
            merge(arr, low + k, k, up);
        }
    };

    const bitonicMerge = (arr, low, count, up) => {
        if (count > 1) {
            const k = count / 2;
            bitonicMerge(arr, low, k, true);
            bitonicMerge(arr, low + k, k, false);
            merge(arr, low, count, up);
        }
    };

    const n = arr.length;
    for (let k = 2; k <= n; k *= 2) {
        for (let j = k >> 1; j > 0; j >>= 1) {
            for (let i = 0; i < n - k; i += k) { // Adjust loop bounds
                bitonicMerge(arr, i, k, up);
            }
        }
    }

    return arr;
}

// Bozo Sort
// Time Complexity: O((n+1)!)
// Space Complexity: O(1)
function bozoSort(arr) {
    const isSorted = arr => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    const shuffle = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };

    while (!isSorted(arr)) {
        shuffle(arr);
    }

    return arr;
}

// Timsort:
//    Time Complexity: 
//      Best Case: O(n)
//      Average Case: O(n log n)
//      Worst Case: O(n log n)
//    Space Complexity: O(n)
function timsort(arr) {
    const MIN_MERGE = 32;
    const minRunLength = minRun(arr.length);

    function minRun(length) {
        let r = 0;
        while (length >= MIN_MERGE) {
            r |= length & 1;
            length >>= 1;
        }
        return length + r;
    }

    function timSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n; i += minRunLength) {
            insertionSort(arr, i, Math.min(i + minRunLength - 1, n - 1));
        }
        for (let size = minRunLength; size < n; size = 2 * size) {
            for (let left = 0; left < n; left += 2 * size) {
                let mid = left + size - 1;
                let right = Math.min((left + 2 * size - 1), (n - 1));
                if (mid < right) merge(arr, left, mid, right);
            }
        }
        return arr;
    }

    return timSort(arr);
}

// Introsort:
//    Time Complexity: 
//      Best Case: O(n log n)
//      Average Case: O(n log n)
//      Worst Case: O(n log n)
//    Space Complexity: O(log n)
function introSort(arr) {
    const maxDepth = Math.floor(2 * Math.log(arr.length) / Math.log(2));

    function insertionSort(arr, start, end) {
        for (let i = start + 1; i <= end; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= start && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    function quickSortWithPartition(arr, low, high, depth) {
        if (low < high) {
            if (depth == 0) {
                heapSort(arr, low, high);
                return;
            }
            const pi = partition(arr, low, high);
            quickSortWithPartition(arr, low, pi - 1, depth - 1);
            quickSortWithPartition(arr, pi + 1, high, depth - 1);
        }
    }

    quickSortWithPartition(arr, 0, arr.length - 1, maxDepth);
    insertionSort(arr, 0, arr.length - 1);

    return arr;
}

// Strand sort:
//    Time Complexity:
//      Best Case: O(n)
//      Average Case: O(n^2)
//      Worst Case: O(n^2)
//    Space Complexity: O(n)
function strandSort(arr) {
    function strand(arr) {
        let result = [arr.shift()];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= result[result.length - 1]) {
                result.push(arr.splice(i--, 1)[0]);
            }
        }
        return result;
    }

    let result = [];
    while (arr.length) {
        let subArr = strand(arr);
        result = merge(result, subArr);
    }
    return result;
}

// Library sort:
//    Time Complexity:
//      Best Case: O(n log n)
//      Average Case: O(n log n)
//      Worst Case: O(n log n)
//    Space Complexity: O(1)
function librarySort(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort,
    countingSort,
    radixSort,
    bucketSort,
    shellSort,
    cocktailShakerSort,
    combSort,
    gnomeSort,
    cycleSort,
    pancakeSort,
    bogoSort,
    stoogeSort,
    bitonicSort,
    bozoSort,
    timsort,
    introSort,
    strandSort,
    librarySort
};
