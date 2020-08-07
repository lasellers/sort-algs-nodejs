
/*
package com.intrafoundation;

public class QuickSort extends BaseSort {

    public void sort(int[] arr) {
        swaps = 0;
        quickSort(arr, 0, arr.length - 1);
    }

    public void quickSort(int[] arr, final int begin, final int end) {
        if (begin < end) {
            final int partitionIndex = partition(arr, begin, end);

            quickSort(arr, begin, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, end);
        }
    }

    private int partition(int[] arr, final int begin, final int end) {
        final int pivot = arr[end];
        int slidingIndex = (begin - 1);

        for (int loopIndex = begin; loopIndex < end; loopIndex++) {
            if (arr[loopIndex] <= pivot) {
                swap(arr, ++slidingIndex, loopIndex);
            }
        }

        swap(arr, ++slidingIndex, end);

        return slidingIndex;
    }

}

 */