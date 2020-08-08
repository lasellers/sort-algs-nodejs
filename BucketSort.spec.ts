"use strict";

// @ts-ignore
const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

// @ts-ignore
let sortData = new (require('./SortData.ts').SortData)();
let bucketSort = new (require('./BucketSort.ts').BucketSort)();

test('swaps', () => {
    let swap = bucketSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = bucketSort.getSwaps();
    expect(swap).to.be.equal(0);
});

test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});