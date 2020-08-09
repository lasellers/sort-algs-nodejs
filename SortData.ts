export class SortData {
    constructor() {
    }

    getSortDataInt0 = (): Array<number> => {
        return [];
    };

    getSortDataInt0Sorted = (): Array<number> => {
        return [];
    };

    getSortDataInt4 = (): Array<number> => {
        return [3, 1, 2, 4];
    };

    getSortDataInt4Sorted = (): Array<number> => {
        return [1, 2, 3, 4];
    };

    getSortDataInt6 = (): Array<number> => {
        return [7, 1, 100, -1, 3, 4];
    };

    getSortDataInt6Sorted = (): Array<number> => {
        return [-1, 1, 3, 4, 7, 100];
    };

    getSortDataInt10 = (): Array<number> => {
        return [7, 1, 100, 2, 3, 4, 14, 13, 12, 11];
    };

    getSortDataInt10Sorted = (): Array<number> => {
        return [1, 2, 3, 4, 7, 11, 12, 13, 14, 100];
    };

    getSortDataIntS = (): Array<number> => {
        return [-3, -10, 1, 0];
    };

    getSortDataIntSSorted = (): Array<number> => {
        return [-10, -3, 0, 1];
    };

    getSortDataIntBigData = (): Array<number> => {
        const MAX = 200;
        let arr = [];
        for (let index = 0; index < MAX; index++) {
            arr[index] = Math.floor((Math.random() * 100) + 1);
        }
        return arr;
    };

}

// module.exports.SortData = SortData;
