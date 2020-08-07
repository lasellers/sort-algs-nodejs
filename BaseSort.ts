//  tsc BaseSort.ts && nodejs BaseSort.js
let swaps: number = 0;

let sort = (arr: Array<number>) => {
    swaps = -1;
    console.log(swaps);
    return arr.sort();
}

let getSwaps = () => {
    return swaps;
}

let swap = (arr: Array<number>, indexA: number, indexB: number) => {
    const swapTemp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = swapTemp;
    swaps++;
    return arr;
}

let arr = [1,3,2];
let arr2 =sort(arr);
console.log(swaps);
console.log(arr);
console.log(arr2);

module.exports.swaps = swaps;
module.exports.sort = sort;
module.exports.getSwaps = getSwaps;
module.exports.swap = swap;
//module.exports = () => { console.log()};
//console.log(module);
/*
package com.intrafoundation;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BaseSortTest {

    @Test
    void sort() {
        BaseSort s = new BaseSort();
        int[] arr = new int[]{2, 3, 1};

        s.sort(arr);

        Assertions.assertArrayEquals(new int[]{1, 2, 3}, arr);
    }

    @Test
    void getSwaps() {
        BaseSort s = new BaseSort();
        Assertions.assertEquals(0, s.getSwaps());

        int[] arr = new int[]{1, 2, 3};
        s.sort(arr);

        Assertions.assertEquals(0, s.getSwaps());
    }

@Test
void swap() {
    BaseSort s = new BaseSort();
    int[] arr = new int[]{1, 2, 3};

    s.swap(arr, 0, 1);

    Assertions.assertArrayEquals(new int[]{2, 1, 3}, arr);
}
}
 */