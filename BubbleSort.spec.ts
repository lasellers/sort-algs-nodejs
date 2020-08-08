"use strict";

import {SortData} from "./SortData";
import {BubbleSort} from "./BubbleSort";

let sortData = new SortData();
let bubbleSort = new BubbleSort();

// @ts-ignore
const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

// @ts-ignore
//let sortData = new (require('./SortData.ts').default)();
//let bubbleSort = new (require('./BubbleSort.ts').default)();
//let sortData = require('./SortData.ts');
//let bubbleSort = require('./BubbleSort.ts');

test('swaps', () => {
    let swap = bubbleSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = bubbleSort.getSwaps();
    expect(swap).to.be.equal(0);
});

test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    bubbleSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
    bubbleSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});
