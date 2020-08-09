"use strict";

import {SortData} from "./SortData";
import {QuickSort} from "./QuickSort";

let sortData = new SortData();
let quickSort = new QuickSort();

// @ts-ignore
const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

test('swaps', () => {
    let swap = quickSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = quickSort.getSwaps();
    expect(swap).to.be.equal(0);
});

test('sort 0 element array', () => {
    let arr = sortData.getSortDataInt0();
    let arrSorted = sortData.getSortDataInt0Sorted();
    quickSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    quickSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
    quickSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});
