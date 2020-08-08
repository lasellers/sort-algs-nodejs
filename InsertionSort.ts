//  tsc InsertionSort.ts && nodejs InsertionSort.js
// @ts-ignore
const BaseSort = require('./BaseSort.ts');

class InsertionSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;

        const len: number = arr.length;

        let begin: number = 1;
        let end: number = arr.length;
        for (let index: number = begin; index < end; index++) {
            let key: number = arr[index]; //aka b
            let repositionIndex: number = index - 1;
            while ((repositionIndex >= 0) && (arr[repositionIndex] > key)) {
                // since we have key aka b stored, we don't need to do a/b swaps
                // but can do straight compare and overwrites
                arr[repositionIndex + 1] = arr[repositionIndex];
                repositionIndex--;
                this.swaps++;
            }
            arr[repositionIndex + 1] = key; //insert key at beginning of set being moved up
        }

    }

}

module.exports.InsertionSort = InsertionSort;
//console.log(module);
