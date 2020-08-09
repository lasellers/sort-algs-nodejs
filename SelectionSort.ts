//  tsc QuickSort.ts && nodejs QuickSort.js
import {BaseSort} from "./BaseSort";

export class SelectionSort extends BaseSort {

    sort = (arr: Array<number>): void => {
        this.swaps = 0;
        let partition = 0;
        const len = arr.length - 1;
        do {
            /* v1
            let sub = ratings.slice(0, partition);
            let minV = Math.min(...sub);
            let index = sub.findIndex(el => el == minV); */
            /* v2
            let minV = arr[0];
            let index = 0;
            for (let i = 0; i <= partition; i++) {
                if (arr[i] < minV) {
                    index = i;
                    minV = arr[i];
                }
            } */
            let {minValue, index} = arr.slice(partition).reduce((a, v, index) => {
                if (v < a.minValue) {
                    a.minValue = v;
                    a.index = partition + index;
                }
                return a;
            }, {minValue: arr[partition], index: partition});

            const a = arr[index];
            const b = arr[partition];
            if (a < b) {
                arr[index] = b;
                arr[partition] = a;
                this.swaps++;
            }
        } while (++partition < len);
    }

}
