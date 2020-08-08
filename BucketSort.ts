//  tsc BucketSort.ts && nodejs BucketSort.js
import {BaseSort} from "./BaseSort";

export class BucketSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;

        const len: number = arr.length;

        /* let maxV: number = 0;
        for (let index: number = 0; index < len; index++) {
            let a: number = arr[index];
            if (a > maxV) maxV = a;
        } */
        let maxV = arr.reduce(
            (accumulator: number, currentValue: number) => {
                return (accumulator < currentValue) ? accumulator : currentValue;
            }
            , 0);

        let bucket: Array<number> = [];
        for (let index: number = 0; index < len; index++) {
            const a: number = arr[index];
            bucket[a] = a;
        }

        const bucketLen: number = bucket.length - 1;
        const arr2 = bucket.filter((value) => {
            return value > 0;
        });
        arr.forEach((value, index) => {
            arr[index] = 0;
        });
        arr2.forEach((value, index) => {
            arr[index] = value;
        });
    }

}

//module.exports.BucketSort = BucketSort;
//console.log(module);
