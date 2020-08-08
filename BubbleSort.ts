//  tsc BubbleSort.ts && nodejs BubbleSort.js
// @ts-ignore
const BaseSort = require('./BaseSort.ts');
class BubbleSort extends BaseSort{

    sort = (arr: Array<number>): void => {
        this.swaps = 0;

        const end: number = arr.length - 1;

        let swapped: boolean;
        do {
            swapped = false;
            for (let inner: number = 0; inner < end; inner++) {
                const a = arr[inner];
                const b = arr[inner + 1];
                if (a > b) {
                    arr[inner] = b;
                    arr[inner + 1] = a;
                    this.swaps++;
                    swapped = true;
                }
            }
        } while (swapped);
    }

}
module.exports.BubbleSort = BubbleSort;
//console.log(module);
