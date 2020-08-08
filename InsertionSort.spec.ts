"use strict";

// @ts-ignore
const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

// @ts-ignore
let sortData = new (require('./SortData.ts').SortData)();
let insertionSort = new (require('./InsertionSort.ts').InsertionSort)();

test('swaps', () => {
    let swap = insertionSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = insertionSort.getSwaps();
    expect(swap).to.be.equal(0);
});

test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    insertionSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
    insertionSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});
