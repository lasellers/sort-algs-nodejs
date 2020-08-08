//  tsc BucketSort.ts && nodejs BucketSort.js
// @ts-ignore
const BaseSort = require('./BaseSort.ts');
class BucketSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;

        const len: number = arr.length;

        let maxV: number = 0;
        for (let index: number = 0; index < len; index++) {
            let a: number = arr[index];
            if (a > maxV) maxV = a;
        }

        let bucket: Array<number> = [];
        for (let index: number = 0; index < len; index++) {
            const a: number = arr[index];
            bucket[a] = a;
        }

        const bucketLen: number = bucket.length - 1;
        for (let index: number = 0, arrIndex = 0; index < bucketLen; index++) {
            const a: number = bucket[index];
            if (a != 0) {
                arr[arrIndex++] = a;
            }
        }

    }

}
module.exports.BucketSort = BucketSort;
//console.log(module);
