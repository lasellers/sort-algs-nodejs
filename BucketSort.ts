//  tsc BucketSort.ts && nodejs BucketSort.js
import {BaseSort} from "./BaseSort";
export class BucketSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;

        const len: number = arr.length;
        console.log(`arr ${arr}`);

        let maxV: number = 0;
        for (let index: number = 0; index < len; index++) {
            let a: number = arr[index];
            if (a > maxV) maxV = a;
        }
        console.log(`maxV ${maxV}`);

        let bucket: Array<number> = [];
        for (let index: number = 0; index < len; index++) {
            const a: number = arr[index];
            bucket[a] = a;
        }
        console.log(`bucket ${bucket}`);

        const bucketLen: number = bucket.length - 1;
        for (let index: number = 0, arrIndex = 0; index < bucketLen; index++) {
            const a: number = bucket[index];
            if (a != 0) {
                arr[arrIndex++] = a;
            }
        }
        console.log(`arr ${arr}`);

    }

}
//module.exports.BucketSort = BucketSort;
//console.log(module);
