//  tsc BaseSort.ts && nodejs BaseSort.js
class BaseSort {
    swaps: number;

    constructor() {
        this.swaps = 0;
    }

    sort = (arr: Array<number>): void => {
        this.swaps = -1;
        arr.sort((a, b) => {
            return a - b;
        });
    };

    getSwaps = (): number => {
        return this.swaps;
    };

    swap = (arr: Array<number>, indexA: number, indexB: number) => {
        const swapTemp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = swapTemp;
        this.swaps++;
        return arr;
    };

}
module.exports.BaseSort = BaseSort;
//console.log(module);
