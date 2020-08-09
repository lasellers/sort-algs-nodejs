//  tsc QuickSort.ts && nodejs QuickSort.js
import {BaseSort} from "./BaseSort";

export class QuickSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;
        this.quickSort(arr, 0, arr.length - 1);
    }

    quickSort = (arr: Array<number>, begin: number, end: number) => {
        if (begin < end) {
            const partitionIndex: number = this.partition(arr, begin, end);

            this.quickSort(arr, begin, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, end);
        }
    }

    partition = (arr: Array<number>, begin: number, end: number): number => {
        const pivot = arr[end];
        let slidingIndex = (begin - 1);

        for (let loopIndex: number = begin; loopIndex < end; loopIndex++) {
            if (arr[loopIndex] <= pivot) {
                this.swap(arr, ++slidingIndex, loopIndex);
            }
        }

        this.swap(arr, ++slidingIndex, end);

        return slidingIndex;
    }

}